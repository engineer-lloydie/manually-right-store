<template>
    <div>
        <v-sheet class="mb-10">
            <h1 class="text-center">{{ props.title }}</h1>
        </v-sheet>
        <v-sheet
            class="mx-auto"
            elevation="1"
            max-width="1200"
        >
            <v-sheet class="d-flex justify-center align-center" height="400" v-if="processing">
                <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
            </v-sheet>
            <template v-else>
                <template v-if="manualItems.length">
                    <v-slide-group
                        class="pa-4"
                        center-active
                        show-arrows
                        :mobile="true"
                    >
                        <v-slide-group-item
                            v-for="item in manualItems"
                            :key="item.id"
                        >
                            <v-card
                                class="ma-4"
                                max-width="400"
                                width="100%"
                            >
                                <v-img
                                    class="align-end text-white ma-4"
                                    height="320"
                                    :src="item.thumbnails[0].url"
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
                                    ${{ item.price }}.00
                                </v-card-subtitle>
        
                                <v-card-text>
                                    <div>{{ item.description }}</div>
                                </v-card-text>
        
                                <v-card-actions class="d-flex justify-end flex-column flex-sm-row">
                                    <v-btn
                                        :to="`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`"
                                        color="white" 
                                        text="View Details"
                                        prepend-icon="mdi-text-box-search-outline"
                                        elevation="2"
                                        class="bg-grey-darken-3"
                                    ></v-btn>
                                    <v-btn 
                                        color="white" 
                                        text="Add to cart"
                                        prepend-icon="mdi-cart-check"
                                        elevation="2"
                                        class="bg-red-lighten-1"
                                        :loading="cartStore.addingCart"
                                        @click="addCart(item)"
                                    ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </template>
                <template v-else>
                    <v-sheet class="d-flex justify-center align-center" height="400">No records found</v-sheet>
                </template>
            </template>
        </v-sheet>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
const { isAuthenticated, user } = useSanctumAuth();

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    manualItems: {
        type: Array,
        required: true
    },
    processing: {
        type: Boolean,
        required: true
    }
});

const addCart = async(manual) => {
    try {
        cartStore.setNewAddedCart(false);
        await cartStore.addToCart({
            userId: isAuthenticated.value ? user.value.id : null,
            guestId: isAuthenticated.value ? null : localStorage.getItem('guestId'),
            manualId: manual.id,
            price: manual.price,
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
.loader-center {
    position: absolute;
    top: 50;
    left: 50;
}
</style>