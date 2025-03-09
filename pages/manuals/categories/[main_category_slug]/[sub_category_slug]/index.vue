<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />
        <v-card>
            <v-sheet class="d-flex justify-center ma-16" cols="12" v-if="fetching">
                <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
            </v-sheet>
            <template v-else>
                <v-sheet v-if="!manualItems.length">
                    <p class="text-center ma-16">No records found.</p>
                </v-sheet>
                <v-row
                    v-else
                    class="pa-4"
                >
                    <v-col
                        cols="12"
                        md="6"
                        lg="4"
                        class="d-flex justify-sm-center"
                        v-for="item in manualItems"
                        :key="item.id"
                    >
                        <v-card
                            class="ma-4"
                            max-width="350"
                            width="100%"
                        >
                            <v-img
                                class="align-end text-white ma-4"
                                height="320"
                                alt="Manual Thumbnail"
                                :src="item.thumbnail"
                                lazy-src="~/assets/images/pdf-icon.png"
                                rounded
                                cover
                            >
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular
                                            color="grey-lighten-4"
                                            indeterminate
                                        ></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>

                            <v-card-title>{{ item.title }}</v-card-title>

                            <v-card-subtitle class="text-h6 font-weight-bold">
                                ${{ item.price }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>{{ item.description }}</div>
                            </v-card-text>

                            <v-card-actions class="
                                d-flex
                                align-end
                                justify-sm-end
                                flex-column
                                flex-sm-row
                            ">
                                <v-btn
                                    @click="addCart(item)"
                                    color="white" 
                                    text="Add to Cart"
                                    prepend-icon="mdi-cart-check"
                                    elevation="2"
                                    class="bg-red-lighten-1 text-none"
                                    :loading="cartStore.addingCart"
                                ></v-btn>
                                <v-btn
                                    :to="`/manuals/categories/${route.params.main_category_slug}/${route.params.sub_category_slug}/${item.url_slug}`"
                                    color="white" 
                                    text="View Details"
                                    prepend-icon="mdi-text-box-search-outline"
                                    elevation="2"
                                    class="bg-grey-darken-3 text-none"
                                ></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <div>
                    <v-pagination
                        v-model="page"
                        :length="pageCount"
                        :total-visible="5"
                    ></v-pagination>
                </div>
            </template>
        </v-card>
    </div>
</template>

<script setup>
const route = useRoute();
const { $deslugify } = useNuxtApp();

definePageMeta({
    flag: 'sub_category_slug'
});

const page = ref(1);

import { useCartStore } from '@/store/cart';

const { isAuthenticated, user } = useSanctumAuth();
const cartStore = useCartStore()

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

const fetchManualItems = async () => {
    try {
        fetching.value = true;
        const { data: subCategoryData } = await useBaseFetch('store/main-categories/sub-category', {
            method: 'GET',
            params: {
                urlSlug: route.params.sub_category_slug
            }
        })

        if (subCategoryData) {
            const { data } = await useBaseFetch(`store/main-categories/sub-categories/${subCategoryData.id}/manuals`, {
                method: 'GET',
                params: {
                    page: page.value,
                    itemsPerPage: 9
                }
            })

            manualItems.value = data;
        }

    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false
    }
}

onMounted(() => {
    fetchManualItems();
})

const pageCount = computed(() => {
    return Math.ceil(manualItems.value.length / 9);
});

const addCart = async(manual) => {
    try {
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
</script>

<style lang="scss" scoped>

</style>