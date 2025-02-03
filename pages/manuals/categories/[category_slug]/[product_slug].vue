<template>
    <div>
        <v-container class="pt-0">
            <breadcrumbs :items="breadcrumbItems" />
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row >
                            <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
                                <v-img src="~/assets/images/thumbnail.jpeg" width="300"></v-img>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <h2 class="font-weight-regular">Bell Helicopter Army OH-58A, OH-58C Repair Parts & Tool List 1988 (55-1520-228-23P)</h2>
                                <p>by Bell Helicopter</p>
        
                                <!-- <v-sheet height="80"></v-sheet> -->
        
                                <p>$224.00</p>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-sheet>
                                    <v-select
                                        v-model="documentType"
                                        label="Please select"
                                        :items="['Printed Manual', 'Download']"
                                        variant="outlined"
                                    ></v-select>
                                    <v-select
                                        v-model="quantity"
                                        label="Please select"
                                        :items="[1, 2]"
                                        variant="outlined"
                                    ></v-select>
                                </v-sheet>
                                <v-sheet class="my-5">
                                    <v-btn
                                        width="400"
                                        size="large"
                                        color="white" 
                                        text="Add to cart"
                                        prepend-icon="mdi-cart-check"
                                        elevation="2"
                                        class="bg-red-lighten-1"
                                    ></v-btn>
                                </v-sheet>
                                <v-sheet class="my-5">
                                    <v-btn
                                        width="400"
                                        size="large"
                                        color="white" 
                                        text="Buy now"
                                        prepend-icon="mdi-basket-unfill"
                                        elevation="2"
                                        class="bg-grey-darken-3"
                                    ></v-btn>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
const route = useRoute();
const breadcrumbItems = ref([
    {
        title: "Home",
        disabled: false,
        to: "/",
    },
    {
        title: "Manuals",
        disabled: false,
        to: "/manuals/categories",
    },
    {
        title: "Category",
        disabled: false,
        to: `/manuals/categories/${route.params.category_slug}`,
    },
    {
        title: "Product",
        disabled: true,
        to: "/manuals/categories"
    }
]);

const documentType = ref('Download');
const quantity = ref(1);
</script>

<style lang="scss" scoped>

</style>