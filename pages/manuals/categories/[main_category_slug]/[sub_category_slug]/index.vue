<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />

        <v-sheet class="d-flex justify-between ma-5" cols="12" v-if="fetching">
            <v-row class="pa-4">
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    class="d-flex justify-sm-center"
                    v-for="item in 3"
                    :key="item"
                >
                <v-skeleton-loader
                    elevation="2"
                    class="ma-4"
                    width="100%"
                    type="card, text, actions"
                ></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-sheet>
        <v-sheet v-else>
            <p v-if="!manualItems.length" class="text-center ma-16">No records found.</p>
            <v-card class="px-2" v-else>
                <v-sheet class="text-right">
                    <v-btn-toggle 
                        v-model="toggle"
                        variant="outlined"
                        color="red-lighten-1"
                        density="comfortable"
                        theme="red-lighten-1"
                        slim
                        class="mt-6 mx-4"
                    >
                        <v-btn value="card">
                            <v-icon>mdi-view-grid-outline</v-icon>
                        </v-btn>

                        <v-btn value="list">
                            <v-icon>mdi-view-list-outline</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-sheet>
                <v-sheet>
                    <CardView 
                        v-show="toggle == 'card'"
                        :manualItems="manualItems"
                        :selectedItem="selectedItem"
                        @addToCart="addToCart"/>
                    <ListView
                        v-show="toggle == 'list'"
                        :manualItems="manualItems"
                        :selectedItem="selectedItem"
                        @addToCart="addToCart"/>
                </v-sheet>
            </v-card>
        </v-sheet>
        
        <v-sheet class="mt-5 mb-10">
            <v-pagination
                active-color="red-lighten-1"
                elevation="0"
                variant="flat"
                density="comfortable"
                v-model="page"
                :length="pageCount"
                :total-visible="3"
                @update:model-value="fetchManualItems"
            ></v-pagination>
        </v-sheet>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import ListView from '@/components/product-view/list.vue';
import CardView from '@/components/product-view/card.vue';

const route = useRoute();
const config = useRuntimeConfig();
const { isAuthenticated, user } = useSanctumAuth();

const toggle = ref('card');

const { data: subCategoryData, status, error, refresh, clear } = await useAsyncData('subCategoryData', () =>
    useBaseFetch(`${config.public.apiBaseUrl}/store/main-categories/sub-category`, {
        method: 'GET',
        params: {
            urlSlug: route.params.sub_category_slug
        }
    })
)

useSeoMeta({
    title: subCategoryData.value.name,
    description: `Find high-quality catalogs available for ${subCategoryData.value.name}.`,
    ogDescription: `Find high-quality catalogs available for ${subCategoryData.value.name}.`,
    twitterCard: 'summary_large_image',
})

const { $deslugify } = useNuxtApp();

definePageMeta({
    flag: 'sub_category_slug'
});

const page = ref(1);

const breadcrumbItems = ref([
    {
        title: "Home",
        disabled: false,
        to: "/",
    },
    {
        title: "Main Categories",
        disabled: false,
        to: "/manuals/categories"
    },
    {
        title: `${$deslugify(route.params.main_category_slug)}`,
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}`
    },
    {
        title: `${$deslugify(route.params.sub_category_slug)}`,
        disabled: true
    }
]);

const fetching = ref(true);
const manualItems = ref([]);
const itemCount = ref(0);

const cartStore = useCartStore();

const pageCount = computed(() => {
    return Math.ceil(itemCount.value / 9);
});

const fetchManualItems = async () => {
    try {
        fetching.value = true;

        if (subCategoryData.value) {
            const { data, total } = await useBaseFetch(`store/main-categories/sub-categories/${subCategoryData.value.id}/manuals`, {
                method: 'GET',
                params: {
                    page: page.value,
                    itemsPerPage: 9
                }
            })

            itemCount.value = total;
            manualItems.value = data;
        }
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false
    }
}

const selectedItem = ref(null);

const addToCart = async(manual) => {
    try {
        selectedItem.value = manual.id;
        cartStore.setNewAddedCart(false);
        await cartStore.addToCart({
            userId: isAuthenticated.value ? user.value.id : null,
            guestId: isAuthenticated.value ? null : localStorage.getItem('guestId'),
            manualId: manual.id,
            price: Math.round((manual.price + Number.EPSILON) * 100) / 100,
            quantity: 1
        });

        const params = {};
        
        if (isAuthenticated.value) {
            params.userId = user.value.id;
        } else {
            params.guestId = localStorage.getItem('guestId')
        }

        await cartStore.fetchCartItems(params);
        cartStore.setNewAddedCart(true);
    } catch (error) {
        console.error(error);
    }
}

onMounted(async () => {
    fetchManualItems();
})
</script>

<style lang="scss" scoped>

</style>