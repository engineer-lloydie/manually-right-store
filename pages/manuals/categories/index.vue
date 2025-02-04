<template>
    <div class="pt-0">
        <breadcrumbs :items="breadcrumbItems"/>
        <v-card elevation="10" class="pa-4">
            <v-card-title class="mb-5">Manuals</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col v-for="(item, i) in items" :key="i" xl="3" lg="3" md="4" sm="6" cols="12">
                        <v-btn
                            variant="text"
                            prepend-icon="mdi-file-document-arrow-right"
                            :to="`/manuals/categories/${item.url_slug}`"
                            active-color="red-lighten-1"
                            elevation="10"
                        >
                        <template v-slot:prepend>
                            <v-icon color="red-lighten-1"></v-icon>
                        </template>
                            {{ item.text }}
                        </v-btn>
                    </v-col>
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
        title: "Manuals",
        disabled: true,
    }
]);

const items = [
    { text: 'Category 1', id: 1, url_slug: 'category-1' },
    { text: 'Category 2', id: 2, url_slug: 'category-2' },
    { text: 'Category 3', id: 3, url_slug: 'category-3' },
    { text: 'Category 4', id: 4, url_slug: 'category-4' }
]

</script>

<style lang="scss" scoped>

</style>