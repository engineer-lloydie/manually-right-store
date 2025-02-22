<template>
    <div>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Orders</v-card-title>
            <v-card-text>
                <v-data-table-server
                    :expanded="expanded"
                    :items-per-page="itemsPerPage"
                    :headers="headers"
                    :items="ordersLists"
                    :items-length="totalItems"
                    :loading="fetching"
                    item-value="order_number"
                    show-expand
                    @update:options="getOrderLists"
                >
                    <template v-slot:item.order_number="{ value }">
                        <p class="font-weight-bold">{{ value }}</p>
                    </template>
                    <template v-slot:item.payment_status="{ value }">
                        <p class="font-weight-bold text-success">{{ value.toUpperCase() }}</p>
                    </template>
                    <template v-slot:expanded-row="{ item }">
                        <tr class="bg-red-lighten-2">
                            <th>Name</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Download Previlige</th>
                            <th>Actions</th>
                        </tr>
                        <tr class="bg-grey-lighten-2" v-for="(cart, index) in item.carts" :key="cart.id">
                            <td>{{ cart.manual.title }}</td>
                            <td>{{ cart.price }}</td>
                            <td>{{ cart.quantity }}</td>
                            <td>{{ item.order_details.download_count }}</td>
                            <td>
                                <v-tooltip text="Download Manual Files">
                                    <template v-slot:activator="{ props }">
                                        <v-btn @click="downloadFiles(item, cart, index)" :loading="isDownloading && selectedIndex == index" :disabled="item.order_details.download_count == 0" variant="text" icon="mdi-file-download" v-bind="props"></v-btn>
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

const ordersLists = ref([]);
const fetching = ref(false);
const isDownloading = ref(false);
const { isAuthenticated, user } = useSanctumAuth();
const orderStore = useOrderStore();

const { guestOrderMasterIds } = storeToRefs(orderStore);

watch(guestOrderMasterIds, () => {
    getOrderLists({page: 1, itemsPerPage: itemsPerPage.value})
})

// For table setup
const headers = ref([
    { title: "Order No.", key: "order_number", align: "start" },
    { title: "Transaction ID.", key: "transaction_id", align: "end" },
    { title: "Order Date", key: "purchase_date", align: "end" },
    { title: "Total Price", key: "total_price", align: "end" },
	{ title: "Order Status", key: "payment_status", align: "end", sortable: false }
]);
const itemsPerPage = ref(5);
const totalItems = ref(0);
const expanded = ref([]);
const currentPage = ref(1);

const getOrderLists = async ({ page, itemsPerPage, sortBy }) => {
    try {
        fetching.value = true;
        currentPage.value = page;
        
        const { data, total } = await useBaseFetch('/orders/lists', {
            method: 'get',
            params: {
                userId: isAuthenticated.value ? user.value.id : null,
                guestId: isAuthenticated.value ? null : localStorage.getItem('guestId'),
                orderMasterIds: orderStore.guestOrderMasterIds ? JSON.stringify(orderStore.guestOrderMasterIds) : null,
                page,
                itemsPerPage,
                sortBy
            }
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