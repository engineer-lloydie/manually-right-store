<template>
    <div class="mt-5">
        <v-container max-width="1200">
            <v-sheet class="d-flex mb-6 align-end justify-space-between">
                <v-img
                    src="~/assets/images/partial-logo.png"
                    max-height="100"
                    max-width="250"
                >
                </v-img>

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
                    <v-col xs="12" md="7" lg="7">
                        <v-card class="pa-5 my-5">
                            <v-card-item id="checkout-information">
                                <v-sheet>
                                    <h3>Checkout Information</h3>
                                </v-sheet>
                                <v-sheet class="my-3">
                                    <v-row>
                                        <v-col>
                                            <v-responsive
                                                class="mx-auto"
                                            >
                                                <v-text-field
                                                    :rules="[first_name.required]"
                                                    label="First name"
                                                    clearable
                                                ></v-text-field>
                                            </v-responsive>
                                        </v-col>
                                        <v-col>
                                            <v-responsive
                                                class="mx-auto"
                                            >
                                                <v-text-field
                                                    :rules="[last_name.required]"
                                                    label="Last name"
                                                    clearable
                                                ></v-text-field>
                                            </v-responsive>
                                        </v-col>
                                    </v-row>
                                </v-sheet>
                                <v-sheet class="my-3">
                                    <v-text-field
                                        :rules="[email_address.required]"
                                        label="Email address"
                                        clearable
                                    ></v-text-field>
                                </v-sheet>
                            </v-card-item>
                        </v-card>
                        <v-card class="pa-5 my-5">
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
                            <v-card class="pa-5 my-5">
                                <v-card-item>
                                    <v-sheet class="mb-5">
                                        <h3>Payment Summary</h3>
                                    </v-sheet>
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4 class="font-weight-regular">Number of Item(s)</h4>
                                            <p class="font-weight-regular">1</p>
                                        </v-col>
                                    </v-row>
    
                                    <v-divider class="my-5"></v-divider>
    
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4 class="font-weight-regular">Total Cost</h4>
                                            <p class="font-weight-regular">$17</p>
                                        </v-col>
                                    </v-row>
                                </v-card-item>
                            </v-card>
                        </v-sheet>
                        <v-sheet>
                            <v-card class="pa-5 my-5">
                                <v-card-item>
                                    <v-sheet class="mb-5">
                                        <h3>Item Summary</h3>
                                    </v-sheet>
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4>Number of Item(s)</h4>
                                            <p>1</p>
                                        </v-col>
                                    </v-row>
    
                                    <v-divider class="my-5"></v-divider>
    
                                    <v-row>
                                        <v-col class="d-flex justify-space-between">
                                            <h4>Total Cost</h4>
                                            <p>$17</p>
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

const first_name = ref({
    required: (v) => !!v || 'First name is required.',
});

const last_name = ({
    required: (v) => !!v || 'Last name is required.',
});

const email_address = ({
    required: (v) => !!v || 'Email address is required.',
});
</script>

<style lang="scss" scoped>

</style>