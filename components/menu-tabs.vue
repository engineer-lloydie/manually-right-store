<template>
    <div>
        <div class="d-flex justify-end">
            <v-sheet
                class="ma-2 pa-2"
            >
                <v-btn 
                    exact 
                    to="/documents/categories" 
                    text="Manuals" 
                    value="manuals"
                    variant="text"
                    active-color="red-lighten-1"
                ></v-btn>
                <v-btn
                    exact
                    text="Contact Us" 
                    value="contact_us"
                    variant="text"
                ></v-btn>
            </v-sheet>
        </div>
    </div>
</template>

<script setup>
const tab = ref(null);
const initialized = ref(false);

onMounted(() => {
    initialized.value = true;
});
</script>

<style lang="scss" scoped>

</style>