<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems"/>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Main Categories</v-card-title>
            <v-card-text>
                <v-sheet class="d-flex justify-center ma-16" v-if="fetching">
                    <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                </v-sheet>
                <template v-else>
                    <template v-if="!mainCategories.length">
                        <p class="text-center ma-16">No records found.</p>
                    </template>
                    <template v-else>
                        <v-row>
                            <v-col v-for="(item, i) in mainCategories" :key="i" cols="12" md="6" lg="4">
                                <v-btn
                                    block
                                    variant="text" 
                                    :to="`/manuals/categories/${item.url_slug}`"
                                    class="d-flex justify-start align-center custom-transform-class text-none"
                                >
                                    <v-icon class="me-5" color="red-lighten-1">mdi-folder-file-outline</v-icon> {{ item.name }}
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
const breadcrumbItems = ref([
    {
        title: "Home",
        disabled: false,
        to: "/",
    },
    {
        title: "Main Categories",
        disabled: true,
    }
]);

const mainCategories = ref([]);
const fetching = ref(false);

const fetchMainCategories = async () => {
    try {
        fetching.value = true;

        const { data } = await useBaseFetch('/store/main-categories', {
            method: 'GET'
        });

        mainCategories.value = data;
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false;
    }
}

fetchMainCategories();
</script>

<style lang="scss" scoped>

</style>