<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />
        
        <v-card>
            <v-card-text>
                <v-container>
                    <v-sheet class="d-flex justify-center ma-16" cols="12" v-if="fetching">
                        <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                    </v-sheet>
                    <v-row v-else>
                        <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column flex-wrap">
                            <v-img
                                :src="manualDetails.thumbnails[selectedThumbnail]?.file_url"
                                lazy-src="~/assets/images/pdf-icon.png"
                                width="300" 
                                height="300"
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
                            
                            <v-sheet height="30"></v-sheet>

                            <v-sheet>
                                <v-card>
                                    <v-card-text>
                                        <v-row>
                                            <v-col cols="4" lg="3" class="pa-1" v-for="(thumbnail, index) in manualDetails.thumbnails" :key="index">
                                                <v-btn
                                                    :variant="selectedThumbnail == index ? 'outlined' : null"
                                                    height="auto"
                                                    width="50"
                                                    :active="selectedThumbnail == index"
                                                    @click="selectedThumbnail = index"
                                                    class="py-1"
                                                >
                                                    <v-img
                                                        lazy-src="~/assets/images/image-icon.png"
                                                        :src="thumbnail.file_url" 
                                                        width="50" 
                                                        height="auto"
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
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <h2 class="font-weight-regular">{{ manualDetails.title }}</h2>
    
                            <v-sheet height="30"></v-sheet>
    
                            <h3>${{ manualDetails.price }}.00</h3>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-sheet>
                                <v-select
                                    v-model="documentType"
                                    label="Please select"
                                    :items="['Printed Manual', 'Download']"
                                    variant="outlined"
                                ></v-select>
                                <v-select
                                    v-model="quantity"
                                    label="Please select"
                                    :items="quantityItems"
                                    variant="outlined"
                                >
                                    <!-- <template v-slot:append-item>
                                        <v-divider></v-divider>

                                        <v-list-item>
                                            <v-text-field v-model="quantity" label="Input custom quantity" variant="outlined" class="ma-3"></v-text-field>
                                        </v-list-item>
                                    </template> -->
                                </v-select>
                            </v-sheet>
                            <v-sheet class="my-5">
                                <v-btn
                                    width="400"
                                    size="large"
                                    color="white" 
                                    text="Add to cart"
                                    prepend-icon="mdi-cart-check"
                                    elevation="2"
                                    class="bg-red-lighten-1"
                                    :loading="cartStore.addingCart"
                                    @click="addCart()"
                                ></v-btn>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
const route = useRoute();
const { $deslugify } = useNuxtApp();

definePageMeta({
    flag: 'product_slug'
});

import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
const { isAuthenticated, user } = useSanctumAuth();

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
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}/${route.params.sub_category_slug}`
    },
    {
        title: `${$deslugify(route.params.product_slug)}`,
        disabled: true
    }
]);

const documentType = ref('Download');
const quantity = ref(1);

const fetching = ref(false);
const manualDetails = ref(null);

const selectedThumbnail = ref(0);

const fetchManualDetails = async () => {
    try {
        fetching.value = true;

        const { data } = await useBaseFetch(`store/main-categories/sub-categories/manual-details`, {
            method: 'GET',
            params: {
                urlSlug: route.params.product_slug
            }
        })

        manualDetails.value = data;
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false
    }
}

fetchManualDetails();

const quantityItems = [1];

const addCart = async() => {
    try {
        cartStore.setNewAddedCart(false);

        await cartStore.addToCart({
            userId: isAuthenticated.value ? user.value.id : null,
            guestId: isAuthenticated.value ? null : localStorage.getItem('guestId'),
            manualId: manualDetails.value.id,
            price: parseInt(manualDetails.value.price) * parseInt(quantity.value),
            quantity: quantity.value
        });

        await cartStore.fetchCartItems();
        cartStore.setNewAddedCart(true);
    } catch (error) {
        console.error(error);
    }
}

</script>

<style lang="scss" scoped>

</style>