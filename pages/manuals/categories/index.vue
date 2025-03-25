<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems"/>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Main Categories</v-card-title>
            <v-card-text>
                <template v-if="fetching">
                    <v-row>
                        <v-col v-for="item in 3" :key="item" cols="12" md="6" lg="4">
                            <v-skeleton-loader
                                type="list-item-avatar"
                            ></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </template>
                <template v-else>
                    <template v-if="!mainCategories.length">
                        <p class="text-center">No records found.</p>
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
definePageMeta({
    title: 'Main Categories'
})

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