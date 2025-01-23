<template>
    <div>
        <v-container class="pt-0">
            <breadcrumbs />
            <v-card>
                <v-slide-group
                    class="pa-4"
                    center-active
                    show-arrows
                >
                    <v-slide-group-item
                        v-for="n in 10"
                        :key="n"
                    >
                        <v-card
                            class="ma-4"
                            width="330"
                        >
                            <v-img
                                class="align-end text-white"
                                height="320"
                                src="~/assets/images/thumbnail.jpeg"
                            >
                            </v-img>

                            <v-card-title>Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)</v-card-title>

                            <v-card-subtitle class="text-h6 font-weight-bold" color="red">
                                $100.00
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)</div>
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
            </v-card>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>