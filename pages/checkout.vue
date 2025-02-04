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
                                <v-sheet class="my-3">
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                :rules="[firstName.required]"
                                                label="First name"
                                                variant="outlined"
                                                clearable
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field
                                                :rules="[lastName.required]"
                                                label="Last name"
                                                variant="outlined"
                                                clearable
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                                <v-sheet class="my-3">
                                    <v-text-field
                                        :rules="[emailAddress.required]"
                                        label="Email address"
                                        variant="outlined"
                                        clearable
                                    ></v-text-field>
                                </v-sheet>
                            </v-card-item>
                        </v-card>
                        <v-card class="my-5">
                            <v-card-item id="payment">
                                <v-sheet>
                                    <h3>Payment</h3>
                                </v-sheet>
                                <v-sheet>
                                    <v-btn>
                                        <v-icon>mdi-cash-clock</v-icon>
                                        Paypal
                                    </v-btn>
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
                                            <p class="font-weight-regular">{{ cartItems.length }}</p>
                                        </v-col>
                                    </v-row>
    
                                    <v-divider class="my-5"></v-divider>
    
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4 class="font-weight-regular">Total Cost</h4>
                                            <h4 class="price-text-color text-right">${{ totalCost }}.00</h4>
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
                                    <v-row v-for="item in cartItems" :key="item.id">
                                        <v-col cols="3">
                                            <v-img 
                                                src="~/assets/images/thumbnail.jpeg"
                                                max-height="100"
                                            />
                                        </v-col>
                                        <v-col cols="6">
                                            <h5 class="mb-1">{{ item.name }}</h5>
                                            <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                        </v-col>
                                        <v-col cols="3">
                                            <h4 class="price-text-color text-right">${{ item.price }}.00</h4>
                                        </v-col>
                                    </v-row>
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
definePageMeta({
    layout: false,
});

const totalCost = computed(() => {
    return cartItems.value.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
});

const cartItems = ref([
    {
        id: 1,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        price: 17,
        quantity: 1
    },
    {
        id: 2,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        price: 17,
        quantity: 1
    }
]);

const firstName = ref({
    required: (v) => !!v || 'First name is required.',
});

const lastName = ({
    required: (v) => !!v || 'Last name is required.',
});

const emailAddress = ({
    required: (v) => !!v || 'Email address is required.',
});
</script>

<style lang="scss" scoped>
.price-text-color {
    color: #EF5350;
}
</style>