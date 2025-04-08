<template>
    <div>
        <v-row class="pa-4">
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                class="d-flex justify-sm-center"
                v-for="item in manualItems"
                :key="item.id"
            >
                <v-card
                    width="100%"
                    height="fit-content"
                    class="pa-2"
                    elevation="5"
                >
                    <v-img class="align-end text-white ma-4"
                        height="320"
                        alt="Manual Thumbnail"
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

                    <v-card-title class="text-wrap text-subtitle-1">{{ item.title }}</v-card-title>

                    <v-card-subtitle class="text-subtitle-1 font-weight-bold text-black">
                        ${{ item.price }}
                    </v-card-subtitle>

                    <v-card-text>
                        <div>{{ item.description }}</div>
                    </v-card-text>

                    <v-card-actions class="d-flex flex-column">
                        <v-btn
                            @click="$emit('addToCart', item)"
                            color="white" 
                            text="Add to Cart"
                            prepend-icon="mdi-cart-check"
                            elevation="2"
                            class="bg-red-lighten-1 text-none"
                            width="100%"
                            :loading="cartStore.addingCart && selectedItem === item.id"
                        ></v-btn>
                        <v-btn
                            :to="`/manuals/categories/${route.params.main_category_slug}/${route.params.sub_category_slug}/${item.url_slug}`"
                            color="white" 
                            text="View Details"
                            prepend-icon="mdi-text-box-search-outline"
                            elevation="2"
                            width="100%"
                            class="bg-grey-darken-3 text-none"
                        ></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';

const props = defineProps({
    manualItems: {
        type: Array,
        default: () => []
    },
    selectedItem: {
        type: Number,
        default: null
    },
})

const route = useRoute();
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>

</style>