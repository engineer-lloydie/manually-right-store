<template>
    <div>
        <v-card v-for="item in manualItems" :key="item.id" class="my-4 mx-0 mx-sm-4" elevation="5">
            <v-row class="pa-4">
                <v-col cols="4" sm="6" md="4">
                    <v-img
                        class="align-end text-white ma-4"
                        :height="isMobile ? 100 : 320"
                        :width="isMobile ? 100 : 'auto'"
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
                </v-col>
                <v-col cols="8" sm="6" md="4">
                    <p class="text-wrap text-subtitle-1">{{ item.title }}</p>
     
                    <v-sheet height="20"></v-sheet>
    
                    <p class="text-subtitle-1 font-weight-bold text-grey-darken-1">
                        ${{ item.price }}
                    </p>
    
                    <v-sheet height="20"></v-sheet>
    
                    <p>{{ item.description }}</p>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-sheet class="my-5">
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
                    </v-sheet>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
const { isMobile } = useDevice();

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