<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems" />
        <v-card>
            <v-row
                class="pa-4"
            >
                <v-col
                    cols="12"
                    lg="4"
                    md="6"
                    sm="12"
                    class="d-flex justify-sm-center"
                    v-for="item in manualItems"
                    :key="item.id"
                >
                    <v-card
                        class="ma-4"
                        max-width="400"
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

                        <v-card-actions class="d-flex justify-end">
                            <v-btn
                                :to="`/manuals/categories/${route.params.category_slug}/${item.url_slug}`"
                                color="white" 
                                text="View Details"
                                prepend-icon="mdi-text-box-search-outline"
                                elevation="2"
                                class="bg-grey-darken-3"
                            ></v-btn>
                            <v-btn 
                                color="white" 
                                text="Add to cart"
                                prepend-icon="mdi-cart-check"
                                elevation="2"
                                class="bg-red-lighten-1"
                            ></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <div>
                <v-pagination
                    v-model="page"
                    :length="pageCount"
                    :total-visible="5"
                ></v-pagination>
                </div>
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
        title: "Manuals",
        disabled: false,
        to: "/manuals/categories",
    },
    {
        title: "Category",
        disabled: true
    }
]);

const page = ref(1);
const manualItems = ref([
    {
        id: 1,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 2,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 3,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 4,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 5,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 6,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 8,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 8,
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    }
]);

const pageCount = computed(() => {
    return Math.ceil(manualItems.value.length / 8);
});
</script>

<style lang="scss" scoped>

</style>