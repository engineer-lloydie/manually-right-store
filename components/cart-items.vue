<template>
	<div>
		<v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" persistent :max-width="700" width="700" :max-height="600">
			<template v-slot:activator="{ props }">
				<v-btn
                    color="grey-darken-1"
                    class="text-none"
                    density="compact"
                    size="40"
                    variant="text"
                    rounded="circle"
                    stacked
                    v-bind="props"
                >
                    <v-badge color="red-lighten-1" :content="cartStore.totalCount">
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </v-btn>
			</template>

			<v-card min-width="300">
                <template v-slot:append>
                    <v-btn
                        density="comfortable"
                        icon="$close"
                        variant="plain"
                        @click="menu = !menu"
                    ></v-btn>
                </template>
				<v-card-item>
                    <v-card-text>
                        <v-alert
                            v-if="showAlert"
                            :text="alertMessage"
                            type="success"
                            class="mb-5"
                            closable
                        ></v-alert>
                        <template v-if="cartStore.cartItems.length">
                            <v-sheet class="mb-5">
                                <v-row v-for="(item, index) in cartStore.cartItems" :key="item.id" align="center">
                                    <v-col class="d-flex justify-between d-sm-inline" cols="12" sm="3">
                                        <v-img 
                                            :src="item.thumbnail"
                                            lazy-src="~/assets/images/image-icon.png"
                                            width="70"
                                            height="70"
                                            rounded
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
                                    <v-col class="text-center text-sm-left" cols="12" sm="5">
                                        <h5 class="mb-1">{{ item.manual.title }}</h5>
                                        <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                    </v-col>
                                    <v-col cols="12" sm="2">
                                        <h4 class="price-text-color text-center">${{ item.price }}</h4>
                                    </v-col>
                                    <v-col cols="12" sm="2" class="text-center">
                                        <v-btn :loading="processing && selectedCart == item.id" icon="mdi-delete" size="30" color="red-lighten-1" variant="text" @click="deleteCart(item.id)"></v-btn>
                                    </v-col>
                                    <v-divider v-if="(index + 1) != cartStore.cartItems.length"></v-divider>
                                </v-row>
                            </v-sheet>
                            <v-sheet color="grey-lighten-3 pa-5 mb-5">
                                <div class="d-flex flex-column">
                                    <v-row>
                                        <v-col cols="6">
                                            <h3>Total</h3>
                                        </v-col>
                                        <v-col cols="6" class="text-end">
                                            <h3>${{ cartStore.totalPrice }}.00</h3>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-sheet>
                            <v-sheet>
                                <v-btn @click="checkout" prepend-icon="mdi-cart-arrow-up" color="red-lighten-1">
                                    Checkout
                                </v-btn>
                            </v-sheet>
                        </template>
                        <p v-else class="text-center">No records found</p>
                    </v-card-text>
                </v-card-item>
			</v-card>
		</v-menu>
	</div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { useModalStore } from '@/store/modal';
import { storeToRefs } from 'pinia'

const menu = ref(false);
const cartStore = useCartStore();
const modalStore = useModalStore();
const { isAuthenticated } = useSanctumAuth();
const showAlert = ref(false);
const alertMessage = ref(null);
const processing = ref(false);
const selectedCart = ref(null);

const { $showModal, $hideModal } = useNuxtApp();

const { newCartAdded } = storeToRefs(cartStore);

watch(newCartAdded, (newValue, oldValue) => {
    if (newValue) {
        menu.value = true;
        alertMessage.value = 'A new cart has been added successfully.'
        showAlert.value = true;

        setTimeout(() => {
            showAlert.value = false;
        }, 3000); 
    }
})

const deleteCart = async(cartId) => {
    try {
        processing.value = true;
        selectedCart.value = cartId;

        await useBaseFetch(`/carts/${cartId}`, {
            method: 'DELETE'
        });

        await fetchCarts();

        alertMessage.value = 'Cart has been deleted successfully.'
        showAlert.value = true;

        setTimeout(() => {
            showAlert.value = false;
        }, 3000);
    } catch (error) {
        console.error(error);
    } finally {
        processing.value = false;
        selectedCart.value = null;
    }
}

const fetchCarts = async () => {
    await cartStore.fetchCartItems();
}

onMounted(() => {
    fetchCarts();
});

const checkout = () => {
    if (isAuthenticated.value) {
        $hideModal();
        navigateTo('/checkout');
    } else {
        modalStore.setCheckoutSource(true);
        $showModal('auth-modal');
    }
}

</script>

<style lang="scss" scoped>
</style>