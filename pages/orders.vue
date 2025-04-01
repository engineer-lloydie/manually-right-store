<template>
    <div>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Orders</v-card-title>
            <v-card-text>
                <v-data-table-server
                    :expanded="expanded"
                    :items-per-page="itemsPerPage"
                    :items-per-page-options="[5, 10, 25, 50]"
                    :headers="headers"
                    :items="ordersLists"
                    :items-length="totalItems"
                    :loading="fetching"
                    item-value="order_number"
                    @update:options="getOrderLists"
                >
                    <template v-slot:item.order_number="{ value }">
                        <p class="font-weight-bold">{{ value }}</p>
                    </template>
                    <template v-slot:item.payment_status="{ value }">
                        <p class="font-weight-bold text-success">{{ value.toUpperCase() }}</p>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <!-- <v-btn variant="text" class="text-none">
                            <v-icon>
                                mdi-download-multiple
                            </v-icon>
                            All
                        </v-btn> -->
                        <v-btn
                            variant="text" 
                            class="text-none"
                            :id="`download-activator-${item.id}`"
                        >
                            <v-icon>
                                mdi-file-download
                            </v-icon>
                            Download Manuals
                        </v-btn>
                        <v-menu :activator="`#download-activator-${item.id}`" :close-on-content-click="false" max-height="300px">
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-table>
                                            <thead class="bg-grey-lighten-2">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Download Previlige</th>
                                                        <th>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(cart, index) in item.carts" :key="cart.id">
                                                        <td>{{ cart.manual.title }}</td>
                                                        <td>{{ cart.price }}</td>
                                                        <td>{{ item.order_details.download_count }}</td>
                                                        <td>
                                                            <v-btn 
                                                                @click="downloadFiles(item, cart, index)"
                                                                :loading="isDownloading && selectedIndex == index"
                                                                :disabled="item.order_details.download_count == 0"
                                                                variant="text"
                                                                icon="mdi-file-download"
                                                            >
                                                            </v-btn>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                        </v-table>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                    <template v-slot:expanded-row="{ item }">
                        <tr class="bg-grey-lighten-2" v-for="(cart, index) in item.carts" :key="cart.id">
                            <td>{{ cart.manual.title }}</td>
                            <td>{{ cart.price }}</td>
                            <td>{{ cart.quantity }}</td>
                            <td>{{ item.order_details.download_count }}</td>
                            <td>
                                <v-tooltip text="Download Manual Files">
                                    <template v-slot:activator="{ props }">
                                        <v-btn 
                                            @click="downloadFiles(item, cart, index)"
                                            :loading="isDownloading && selectedIndex == index"
                                            :disabled="item.order_details.download_count == 0"
                                            variant="text"
                                            icon="mdi-file-download"
                                            v-bind="props"></v-btn>
                                    </template>
                                </v-tooltip>
                            </td>
                        </tr>
                    </template>
                </v-data-table-server>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/store/order';
import { storeToRefs } from 'pinia'

definePageMeta({
    title: 'Orders'
})

const ordersLists = ref([]);
const fetching = ref(false);
const isDownloading = ref(false);
const { isAuthenticated, user } = useSanctumAuth();
const orderStore = useOrderStore();

const { guestOrderMasterIds } = storeToRefs(orderStore);

watch(guestOrderMasterIds, () => {
    getOrderLists({page: 1, itemsPerPage: itemsPerPage.value})
})

watch(isAuthenticated, () => {
    getOrderLists({page: 1, itemsPerPage: itemsPerPage.value}, true)
})

// For table setup
const headers = ref([
    { title: "Order No.", key: "order_number", align: "start" },
    { title: "Transaction ID.", key: "transaction_id", align: "end" },
    { title: "Order Date", key: "purchase_date", align: "end" },
    { title: "Total Price", key: "total_price", align: "end" },
	{ title: "Order Status", key: "payment_status", align: "end", sortable: false },
    { title: "Actions", key: "actions", align: "center", sortable: false }
]);
const itemsPerPage = ref(5);
const totalItems = ref(0);
const expanded = ref([]);
const currentPage = ref(1);

const getOrderLists = async ({ page, itemsPerPage, sortBy }, excludeOrderMasterIds = false) => {
    try {
        fetching.value = true;
        currentPage.value = page;

        const params = {
            page,
            itemsPerPage,
            sortBy
        };

        if (orderStore.guestOrderMasterIds && !excludeOrderMasterIds) {
            params.orderMasterIds = JSON.stringify(orderStore.guestOrderMasterIds);
        }

        if (isAuthenticated.value) {
            params.userId = user.value.id;
        } else {
            params.guestId = localStorage.getItem('guestId');
        }
        
        const { data, total } = await useBaseFetch('/orders/lists', {
            method: 'get',
            params: params
        })

        ordersLists.value = data;
        totalItems.value = total
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false;
    }
}

const selectedIndex = ref(null);

const downloadFiles = async (item, cart, index) => {
    isDownloading.value = true;
    selectedIndex.value = index;
    try {
        const response = await useBaseFetch('/download-files', {
            method: 'POST',
            body: {
                manualId: cart.manual_id,
                orderMasterId: item.id
            },
            responseType: 'blob'
        });

        getOrderLists({page: currentPage.value, itemsPerPage: itemsPerPage.value});

        // Create a download link
        const blob = new Blob([response], { type: 'application/zip' });
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `${item.order_number}-item-${item.order_details.item_number}.zip`;
        document.body.appendChild(a);
        // **Force an automatic download**
        a.style.display = 'none';
        a.click();

        // Clean up
        a.remove();

        window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
        console.error('Download failed:', error);
    } finally {
        isDownloading.value = false;
    }
}
</script>

<style lang="scss" scoped>

</style>