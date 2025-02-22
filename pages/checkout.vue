<template>
    <div class="mt-5">
        <v-container max-width="1300">
            <v-sheet class="d-flex mb-6 align-end justify-space-between">
                <v-img
                    src="~/assets/images/partial-logo.png"
                    max-height="100"
                    max-width="250"
                    @click="$router.push('/')"
                    class="cursor-pointer"
                />

                <v-sheet class="d-flex align-center">
                    <v-icon
                        icon="mdi-shield-check"
                        color="grey-lighten-1"
                        size="40"
                    ></v-icon>
                    <h2 color="grey-darken-3">Secure Checkout</h2>
                </v-sheet>
            </v-sheet>

            <v-divider></v-divider>

            <v-sheet class="mt-5">
                <v-row>
                    <v-col cols="12" md="7" lg="7">
                        <v-card class="my-5">
                            <v-card-item id="checkout-information">
                                <v-sheet>
                                    <h3>Checkout Information</h3>
                                </v-sheet>
                                <v-list lines="two">
                                    <v-list-item title="First Name:" disabled>
                                        <h4>{{ checkoutInformation.firstName }}</h4>
                                    </v-list-item>

                                    <v-divider></v-divider>

                                    <v-list-item title="Last Name:" disabled>
                                        <h4>{{ checkoutInformation.lastName }}</h4>
                                    </v-list-item>

                                    <v-divider></v-divider>
                                    
                                    <v-list-item title="Email Address:" disabled>
                                        <h4>{{ checkoutInformation.emailAddress }}</h4>
                                    </v-list-item>
                                </v-list>
                            </v-card-item>
                        </v-card>
                        <v-card class="my-5">
                            <v-card-item id="payment">
                                <v-sheet>
                                    <h3>Payment</h3>
                                </v-sheet>
                                <v-sheet class="mt-6">
                                    <div id="paypal-button-container"></div>
                                </v-sheet>
                            </v-card-item>
                        </v-card>
                    </v-col>
                    <v-col xs="12" md="5" lg="5">
                        <v-sheet>
                            <v-card class="my-5">
                                <v-card-item>
                                    <v-sheet class="mb-5">
                                        <h3>Payment Summary</h3>
                                    </v-sheet>
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4 class="font-weight-regular">Number of Item(s)</h4>
                                            <p class="font-weight-regular">{{ cartStore.totalCount }}</p>
                                        </v-col>
                                    </v-row>
    
                                    <v-divider class="my-5"></v-divider>
    
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4 class="font-weight-regular">Total Cost</h4>
                                            <h4 class="price-text-color text-right">${{ cartStore.totalPrice }}.00</h4>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-sheet>
                        <v-sheet>
                            <v-card class="my-5">
                                <v-card-item>
                                    <v-sheet class="mb-5">
                                        <h3>Item Summary</h3>
                                    </v-sheet>
                                    <v-sheet class="d-flex justify-center ma-16" v-if="cartStore.fetchingCarts">
                                        <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                                    </v-sheet>
                                    <v-sheet v-else>
                                        <v-sheet v-if="cartStore.totalCount == 0">
                                            <p class="text-center">No records found</p>
                                        </v-sheet>
                                        <v-virtual-scroll v-else max-height="295" item-height="50" :items="cartStore.cartItems">
                                            <template v-slot:default="{ item }">
                                                <v-list-item class="pa-0 my-5">
                                                    <template v-slot:prepend>
                                                        <v-img 
                                                            :src="item.thumbnail"
                                                            width="50"
                                                            height="50"
                                                        />
                                                    </template>

                                                    <v-sheet class="ms-5">
                                                        <h5 class="mb-1">{{ item.title }}</h5>
                                                        <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                                    </v-sheet>

                                                    <template v-slot:append>
                                                        <h5 class="price-text-color text-right font-weight-medium">${{ item.price }}.00</h5>
                                                    </template>
                                                </v-list-item>
                                            </template>
                                        </v-virtual-scroll>
                                    </v-sheet>
                                </v-card-item>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';
import { usePaymentStore } from '@/store/payment';

definePageMeta({
    layout: false,
});

const cartStore = useCartStore();
const paymentStore = usePaymentStore();

const { isAuthenticated, user } = useSanctumAuth();

const fetchCarts = async () => {
    await cartStore.fetchCartItems();

    if (!cartStore.totalCount) {
        navigateTo('/');
    }
}

fetchCarts();

const checkoutInformation = ref({});

const setCheckoutInformation = () => {
    if (isAuthenticated.value) {
        checkoutInformation.value = {
            firstName: user.value.first_name,
            lastName: user.value.last_name,
            emailAddress: user.value.email_address
        }
    } else {
        const checkoutCredentials = JSON.parse(localStorage.getItem('checkoutInformation'));

        checkoutInformation.value = {
            firstName: checkoutCredentials.first_name,
            lastName: checkoutCredentials.last_name,
            emailAddress: checkoutCredentials.email_address
        }
    }
}

onMounted(async () => {
    setCheckoutInformation();
    const { loadPayPal } = usePayPal();
    await loadPayPal();

    if (window.paypal) {
        window.paypal.Buttons({
            createOrder: async () => {
                try {
                    const response = await useBaseFetch('/create-order', {
                        method: 'post',
                        body: {
                            cartIds: cartStore.cartItems.map(cart => cart.id)
                        }
                    });

                    return response.orderID
                } catch (error) {
                    console.error('createOrder', error);
                }
            },
            async onApprove(data, actions) {
                try {
                    const { transactionId } = await useBaseFetch('/capture-order', {
                        method: 'post',
                        body: { orderID: data.orderID }
                    });
                    
                    const { orderNumber } = await useBaseFetch('/complete-order', {
                        method: 'post',
                        body: {
                            cartIds: cartStore.cartItems.map(cart => cart.id),
                            transactionId: transactionId,
                            userId: user?.value.id ?? null,
                            guestId: user ? null : localStorage.getItem('guestId')
                        }
                    });

                    paymentStore.setTransactionDetails({
                        transactionId: transactionId,
                        totalPrice: cartStore.totalPrice,
                        orderNumber: orderNumber
                    });

                    navigateTo('/payment-success');

                    return;
                } catch (error) {
                    console.error('onApprove', error);
                }
            },
            onError(err) {
                console.error('PayPal error', err);
            }
        }).render('#paypal-button-container');
    } else {
        console.error('PayPal SDK failed to load.');
    }
});

</script>

<style lang="scss" scoped>
.price-text-color {
    color: #EF5350;
}
</style>