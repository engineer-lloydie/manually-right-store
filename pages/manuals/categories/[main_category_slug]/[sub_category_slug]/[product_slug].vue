<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />
        
        <v-card>
            <v-card-text>
                <v-container>
                    <v-sheet class="d-flex justify-center" cols="12" v-if="status == 'pending'">
                        <v-skeleton-loader
                            width="100%"
                            type="image"
                        ></v-skeleton-loader>
                        <v-skeleton-loader
                            width="100%"
                            type="text, subtitle"
                        ></v-skeleton-loader>
                        <v-skeleton-loader
                            width="100%"
                            type="text, button"
                        ></v-skeleton-loader>
                    </v-sheet>
                    <v-row v-else>
                        <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column flex-wrap">
                            <v-img
                                :src="manualDetails.thumbnails[selectedThumbnail]?.file_url"
                                lazy-src="~/assets/images/logo-icon.png"
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
    
                            <h3>${{ manualDetails.price }}</h3>

                            <v-sheet height="30"></v-sheet>

                            <h3 v-if="manualDetails.description" class="font-weight-regular">{{ manualDetails.description }}</h3>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-sheet>
                                <v-select
                                    v-model="documentType"
                                    label="Please select"
                                    :items="['Download']"
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
                                    text="Add to Cart"
                                    prepend-icon="mdi-cart-check"
                                    elevation="2"
                                    class="bg-red-lighten-1 text-none"
                                    :loading="cartStore.addingCart"
                                    @click="addCart()"
                                ></v-btn>
                            </v-sheet>
                        </v-col>
                    </v-row>

                    <v-divider class="my-5"></v-divider>

                    <h3>You may also like </h3>
                    <v-sheet>
                        <v-row>
                            <v-col v-for="(item, index) in relatedProducts" :key="index" cols="12" sm="6" md="3">
                                <v-card
                                    class="ma-4"
                                    max-width="350"
                                    width="100%"
                                    height="fit-content"
                                >
                                    <v-img
                                        class="align-end text-white ma-4"
                                        height="320"
                                        :src="item.thumbnail"
                                        lazy-src="~/assets/images/logo-icon.png"
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
            
                                    <v-card-title class="text-wrap text-h6">{{ item.title }}</v-card-title>
            
                                    <v-card-subtitle class="text-h6 font-weight-bold">
                                        ${{ item.price }}
                                    </v-card-subtitle>
            
                                    <v-card-text>
                                        <div>{{ item.description }}</div>
                                    </v-card-text>
            
                                    <v-card-actions class="d-flex justify-end flex-column">
                                        <v-btn
                                            :to="`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`"
                                            color="white" 
                                            text="View Details"
                                            prepend-icon="mdi-text-box-search-outline"
                                            elevation="2"
                                            class="bg-grey-darken-3 text-none"
                                            block
                                        ></v-btn>
                                        <v-btn 
                                            color="white" 
                                            text="Add to Cart"
                                            prepend-icon="mdi-cart-check"
                                            elevation="2"
                                            class="bg-red-lighten-1 text-none"
                                            block
                                            :loading="cartStore.addingCart && selectedItem === item.id"
                                            @click="addCart(item)"
                                        ></v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-container>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
const route = useRoute();
const { $deslugify } = useNuxtApp();
const config = useRuntimeConfig();

definePageMeta({
    flag: 'product_slug'
});

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

const selectedThumbnail = ref(0);

const { data: response, status } = await useAsyncData('manualDetails', () =>
    $fetch(`${config.public.apiBaseUrl}/store/main-categories/sub-categories/manual-details`, {
        params: {
            urlSlug: route.params.product_slug
        }
    })
)

const manualDetails = response.value?.data ?? {};

const schemaTitle = manualDetails.meta_tags?.title || manualDetails.title;
const schemaDescription = manualDetails.meta_tags?.description || manualDetails.description;
const schemaImage = manualDetails.thumbnails?.[0]?.file_url;
const schemaPrice = manualDetails.price || 0;
const schemaCurrency = 'USD';
const schemaProductName = manualDetails.title;
const schemaProductDescription = manualDetails.description;
const storeName = 'ManuallyRight';

useHead({
    title: schemaTitle,
    meta: [
        { name: 'description', content: schemaDescription },
        { property: 'og:title', content: schemaProductName },
        { property: 'og:description', content: schemaProductDescription },
        { property: 'og:image', content: schemaImage },
        { property: 'og:type', content: 'product' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: schemaProductName,
                image: [schemaImage],
                description: schemaProductDescription,
                brand: {
                    '@type': 'Brand',
                    name: storeName
                },
                offers: {
                    '@type': 'Offer',
                    priceCurrency: schemaCurrency,
                    price: schemaPrice,
                    itemCondition: 'https://schema.org/NewCondition',
                    availability: 'https://schema.org/InStock',
                    seller: {
                        '@type': 'Organization',
                        name: storeName
                    }
                }
            })
        }
    ]
});

const quantityItems = [1];

const addCart = async() => {
    try {
        cartStore.setNewAddedCart(false);

        await cartStore.addToCart({
            userId: isAuthenticated.value ? user.value.id : null,
            guestId: isAuthenticated.value ? null : localStorage.getItem('guestId'),
            manualId: manualDetails.id,
            price: parseFloat(manualDetails.price) * parseInt(quantity.value),
            quantity: quantity.value
        });

        await cartStore.fetchCartItems();
        cartStore.setNewAddedCart(true);
    } catch (error) {
        console.error(error);
    }
}

const relatedProducts = ref([]);

const getRelatedProducts = async() => {
    try {
        const data = await useBaseFetch('store/related-products', {
            params: {
                subCategoryId: manualDetails.sub_category_id,
                manualId: manualDetails.id
            }
        });

        
        relatedProducts.value = data;
        console.log(relatedProducts.value)
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getRelatedProducts()
});

</script>

<style lang="scss" scoped>

</style>