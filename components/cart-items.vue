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
                                    <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                                        <v-img 
                                            src="~/assets/images/thumbnail.jpeg"
                                            max-height="100"
                                        />
                                    </v-col>
                                    <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                                        <h5 class="mb-1">{{ item.title }}</h5>
                                        <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                    </v-col>
                                    <v-col cols="12" sm="2" md="2" lg="2" xl="2">
                                        <h4 class="price-text-color text-center">${{ item.price }}.00</h4>
                                    </v-col>
                                    <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="text-center">
                                        <v-btn :loading="processing && selectedCart == item.id" icon="mdi-delete" size="30" color="red-lighten-1" variant="text" @click="deleteCart(item.id)"></v-btn>
                                    </v-col>
                                    <v-divider inset v-if="(index + 1) != cartStore.cartItems.length"></v-divider>
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
                                <v-btn to="/checkout" prepend-icon="mdi-cart-arrow-up" color="red-lighten-1">
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
import { storeToRefs } from 'pinia'
const menu = ref(false);
const cartStore = useCartStore();
const { isAuthenticated, user } = useSanctumAuth();
const showAlert = ref(false);
const alertMessage = ref(null);
const processing = ref(false);
const selectedCart = ref(null);

const { newCartAdded } = storeToRefs(cartStore);

watch(newCartAdded, (newValue, oldValue) => {
    if (newValue) {
        menu.value = true;
        alertMessage.value = 'A new cart has been added successfully.'
        showAlert.value = true;
    }
})

const deleteCart = async(cartId) => {
    try {
        processing.value = true;
        selectedCart.value = cartId;

        await useBaseFetch(`/carts/${cartId}`, {
            method: 'DELETE'
        });

        fetchCarts();

        alertMessage.value = 'Cart has been deleted successfully.'
        showAlert.value = true;
    } catch (error) {
        console.error(error);
    } finally {
        processing.value = false;
        selectedCart.value = null;
    }
}

const fetchCarts = () => {
    const params = {};
        
    if (isAuthenticated.value) {
        params.userId = user.value.id;
    } else {
        params.guestId = localStorage.getItem('guestId')
    }

    cartStore.fetchCartItems(params);
}

onMounted(() => {
    fetchCarts();
});

</script>

<style lang="scss" scoped>
</style>