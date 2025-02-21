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
                        <v-list density="compact">
                            <v-list-item
                                v-for="(item, i) in subCategories"
                                :key="i"
                                :value="item"
                                :to="`/manuals/categories/${route.params.main_category_slug}/${item.url_slug}`"
                                color="red-lighten-1"
                            >
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-file-document-arrow-right" color="red-lighten-1"></v-icon>
                                </template>
    
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </template>
                </template>
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