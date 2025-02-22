<template>
    <v-footer class="bg-grey-lighten-3 text-center d-flex flex-column">
        <div>@{{ new Date().getFullYear() }} — <strong>Manually Right</strong></div>
    </v-footer>
</template>

<script setup>
const icons = ref([
    "mdi-facebook",
    "mdi-twitter",
    "mdi-linkedin",
    "mdi-instagram",
]);
</script>
