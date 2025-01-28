<template>
    <div>
        <v-sheet class="mb-10">
            <h1 class="text-center">OUR BEST SELLING</h1>
        </v-sheet>
        <v-sheet
            class="mx-auto"
            elevation="1"
            max-width="1000"
        >
            <v-slide-group
                class="pa-4"
                center-active
                show-arrows
                :mobile="false"
            >
                <v-slide-group-item
                    v-for="item in manualItems"
                    :key="item.id"
                >
                    <v-card
                        class="ma-4"
                        width="300"
                    >
                        <v-img
                            class="align-end text-white"
                            height="320"
                            src="~/assets/images/thumbnail.jpeg"
                        >
                        </v-img>

                        <v-card-title>{{ item.name }}</v-card-title>

                        <v-card-subtitle class="text-h6 font-weight-bold">
                            ${{ item.price }}.00
                        </v-card-subtitle>

                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn 
                                color="white" 
                                text="Add to cart"
                                prepend-icon="mdi-cart-check"
                                elevation="2"
                                class="bg-grey-darken-1"
                            ></v-btn>

                            <v-btn
                                to="/checkout"
                                color="white" 
                                text="Buy now"
                                prepend-icon="mdi-basket-fill"
                                elevation="2"
                                class="bg-red-lighten-1"
                            ></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script setup>
const manualItems = ref([
    {
        id: 1,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 2,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 3,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 4,
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    }
]);
</script>

<style lang="scss" scoped>

</style>