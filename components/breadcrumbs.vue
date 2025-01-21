<template>
    <div class="mb-5">
        <v-breadcrumbs :items="items" bg-color="grey-lighten-3" text-color="white">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const items = ref([
    {
        title: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
    },
    {
        title: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
    },
    {
        title: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
    },
]);
</script>

<style lang="scss" scoped></style>
