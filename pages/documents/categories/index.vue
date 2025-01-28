<template>
    <div>
        <v-container class="pt-0">
            <breadcrumbs :items="breadcrumbItems"/>

            <v-card elevation="10">
                <v-card-title>Manuals</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            :value="item"
                            color="red-lighten-1"
                            :to="`/documents/categories/${item.id}`"
                        >
                            <template v-slot:prepend>
                                <v-icon icon="mdi-file-document-arrow-right"></v-icon>
                            </template>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-container>
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
    { text: 'Category 1', id: 1 },
    { text: 'Category 2', id: 2 },
    { text: 'Category 3', id: 3 },
    { text: 'Category 4', id: 4 }
]

</script>

<style lang="scss" scoped>

</style>