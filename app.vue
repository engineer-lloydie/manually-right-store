<template>
    <NuxtLayout>
        <v-app>
            <NuxtPage />
        </v-app>
    </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const { $deslugify } = useNuxtApp();

const pageTitle = computed(() => {
    const dynamic_title = !route.meta.title;
    const title = !dynamic_title ? route.meta.title : $deslugify(route.params[route.meta.flag]);

    return title;
});

useHead({
    title: () => `Manually Right - ${pageTitle.value}`
});
</script>