<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />
        
        <v-card>
            <v-card-text>
                <v-container>
                    <v-sheet class="d-flex justify-center" cols="12" v-if="fetching">
                        <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                    </v-sheet>
                    <v-row v-else>
                        <v-col cols="12" sm="6" md="4" class="d-flex align-center flex-column flex-wrap">
                            <v-img :src="manualDetails.thumbnails[selectedThumbnail]?.file_url" width="300" height="300"></v-img>
                            
                            <v-sheet height="30"></v-sheet>

                            <v-sheet>
                                <v-row>
                                    <v-col cols="6" lg="4" v-for="(thumbnail, index) in manualDetails.thumbnails" :key="index">
                                        <v-btn 
                                            height="auto"
                                            :active="selectedThumbnail == index"
                                            active-color="red-lighten-1"
                                            @click="selectedThumbnail = index"
                                        >
                                            <v-img :src="thumbnail.file_url" width="100" height="110"></v-img>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <h2 class="font-weight-regular">{{ manualDetails.title }}</h2>
    
                            <v-sheet height="30"></v-sheet>
    
                            <h3>${{ manualDetails.price }}.00</h3>
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
        title: "Main Categories",
        disabled: false,
        to: "/manuals/categories"
    },
    {
        title: `${route.params.main_category_slug}`,
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}`
    },
    {
        title: `${route.params.sub_category_slug}`,
        disabled: false,
        to: `/manuals/categories/${route.params.main_category_slug}/${route.params.sub_category_slug}`
    },
    {
        title: `${route.params.product_slug}`,
        disabled: true
    }
]);

const documentType = ref('Download');
const quantity = ref(1);

const fetching = ref(false);
const manualDetails = ref(null);

const selectedThumbnail = ref(0);

const fetchManualDetails = async () => {
    try {
        fetching.value = true;

        const { data } = await useBaseFetch(`store/main-categories/sub-categories/manual-details`, {
            method: 'GET',
            params: {
                urlSlug: route.params.product_slug
            }
        })

        manualDetails.value = data;
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false
    }
}

fetchManualDetails();

</script>

<style lang="scss" scoped>

</style>