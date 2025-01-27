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
                    v-for="n in 5"
                    :key="n"
                >
                    <v-card
                        class="ma-4"
                        width="300"
                    >
                        <v-img
                            class="align-end text-white"
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            cover
                        >
                            <v-card-title>Top 10 Australian beaches</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
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

</script>

<style lang="scss" scoped>

</style>