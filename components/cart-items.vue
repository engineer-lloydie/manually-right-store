<template>
	<div>
		<v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" persistent :max-width="900" :max-height="600">
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
                        <v-sheet class="mb-5">
                            <v-row v-for="(item, index) in cartItems" :key="item.id" align="center">
                                <v-col cols="12" sm="3" md="3" lg="3" xl="3">
                                    <v-img 
                                        src="~/assets/images/thumbnail.jpeg"
                                        max-height="100"
                                    />
                                </v-col>
                                <v-col cols="12" sm="5" md="5" lg="5" xl="5">
                                    <h5 class="mb-1">{{ item.name }}</h5>
                                    <h5 class="font-weight-regular">Quantity: {{ item.quantity }}</h5>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" lg="2" xl="2">
                                    <h4 class="price-text-color text-center">${{ item.price }}.00</h4>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="text-center">
                                    <v-btn icon="mdi-delete" size="30" color="red-lighten-1" variant="text"></v-btn>
                                </v-col>
                                <v-divider inset v-if="(index + 1) != cartItems.length"></v-divider>
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