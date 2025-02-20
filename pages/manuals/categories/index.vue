<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems"/>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Main Categories</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col class="d-flex justify-center ma-16" cols="12" v-if="fetching">
                        <v-progress-circular color="red-lighten-1" indeterminate></v-progress-circular>
                    </v-col>
                    <template v-else>
                        <template v-if="!mainCategories.length">
                            <p class="text-center ma-16">No records found.</p>
                        </template>
                        <template v-else>
                            <v-col v-for="(item, i) in mainCategories" :key="i" cols="12">
                                <v-btn
                                    variant="text"
                                    prepend-icon="mdi-folder-file-outline"
                                    :to="`/manuals/categories/${item.url_slug}`"
                                    active-color="red-lighten-1"
                                    elevation="10"
                                >
                                <template v-slot:prepend>
                                    <v-icon color="red-lighten-1"></v-icon>
                                </template>
                                    {{ item.name }}
                                </v-btn>
                            </v-col>
                        </template>
                    </template>
                </v-row>
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