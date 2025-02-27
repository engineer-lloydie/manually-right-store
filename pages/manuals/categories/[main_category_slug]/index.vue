<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems"/>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Sub Categories</v-card-title>
            <v-card-text>
                <v-sheet class="d-flex justify-center ma-16" v-if="fetching">
                    <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                </v-sheet>
                <template v-else>
                    <template v-if="!subCategories.length">
                        <p class="text-center ma-16">No records found.</p>
                    </template>
                    <template v-else>
                        <v-row>
                            <v-col v-for="(item, i) in subCategories" :key="i" cols="12" md="6" lg="4">
                                <v-btn
                                    block
                                    variant="text" 
                                    :to="`/manuals/categories/${route.params.main_category_slug}/${item.url_slug}`"
                                    class="d-flex justify-start align-center custom-transform-class text-none"
                                >
                                    <v-icon class="me-5" color="red-lighten-1">mdi-file-document-arrow-right</v-icon> {{ item.name }}
                                </v-btn>
                            </v-col>
                        </v-row>
                    </template>
                </template>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
const route = useRoute();
const { $deslugify } = useNuxtApp();

definePageMeta({
    flag: 'main_category_slug'
});

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
        title: `${$deslugify(route.params.main_category_slug)}`,
        disabled: true,
    }
]);

const subCategories = ref([]);
const fetching = ref(false);

const fetchSubCategories = async () => {
    try {
        fetching.value = true;

        const { data: mainCategoryData } = await useBaseFetch(`/store/main-category`, {
            method: 'GET',
            params: {
                urlSlug: route.params.main_category_slug
            }
        });

        if (mainCategoryData) {
            const { data: subCategoriesData } = await useBaseFetch(`/store/main-categories/${mainCategoryData.id}/sub-categories`, {
                method: 'GET'
            });

            subCategories.value = subCategoriesData;
        }
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false;
    }
}

fetchSubCategories();

</script>

<style lang="scss" scoped>

</style>