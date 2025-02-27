<template>
    <div class="mb-5" v-if="!isMobile">
        <v-breadcrumbs :items="items" bg-color="grey-lighten-3" text-color="white">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const { isMobile } = useDevice();
const props = defineProps({
    items: Array,
});
</script>

<style lang="scss" scoped></style>
