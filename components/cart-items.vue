<template>
	<div>
		<v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition">
			<template v-slot:activator="{ props }">
				<v-btn
                    color="grey-darken-1"
                    class="text-none"
                    density="compact"
                    size="50"
                    rounded="circle"
                    stacked
                    v-bind="props"
                >
                    <v-badge color="red-lighten-1" content="2">
                        <v-icon>mdi-cart</v-icon>
                    </v-badge>
                </v-btn>
			</template>

			<v-card min-width="300">
				<v-card-item>
                    <v-card-text>
                        <v-sheet class="mb-5">
                            <v-row v-for="item in cartItems" :key="item.id" align="center">
                                <v-col cols="3">
                                    <v-img 
                                        src="~/assets/images/thumbnail.jpeg"
                                        max-height="100"
                                    />
                                </v-col>
                                <v-col cols="5">
                                    <h5 class="mb-1">{{ item.name }}</h5>
                                    <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                </v-col>
                                <v-col cols="3">
                                    <h4 class="price-text-color text-right">${{ item.price }}.00</h4>
                                </v-col>
                                <v-col cols="12" sm="12" md="1" lg="1" xl="1" class="text-center">
                                    <v-btn icon="mdi-delete" size="30" density="compact" color="red-lighten-1"></v-btn>
                                </v-col>
                            </v-row>
                        </v-sheet>
                        <v-sheet color="grey-lighten-3 pa-5 mb-5">
                            <div class="d-flex flex-column">
                                <v-row>
                                    <v-col cols="6">
                                        <h3>Total</h3>
                                    </v-col>
                                    <v-col cols="6" class="text-end">
                                        <h3>$34.00</h3>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-sheet>
                        <v-sheet>
                            <v-btn to="/checkout" prepend-icon="mdi-cart-arrow-up" color="red-lighten-1">
                                Checkout
                            </v-btn>
                        </v-sheet>
                    </v-card-text>
                </v-card-item>
			</v-card>
		</v-menu>
	</div>
</template>

<script setup>
const menu = ref(false);

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
</script>

<style lang="scss" scoped>
</style>