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
                        <v-list density="compact">
                            <v-list-item
                                v-for="(item, i) in mainCategories"
                                :key="i"
                                :value="item"
                                :to="`/manuals/categories/${item.url_slug}`"
                                color="red-lighten-1"
                            >
                                <template v-slot:prepend>
                                    <v-icon icon="mdi-folder-file-outline" color="red-lighten-1"></v-icon>
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