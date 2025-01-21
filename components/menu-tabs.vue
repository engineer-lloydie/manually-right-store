<template>
    <div>
        <div class="d-flex justify-end">
            <v-sheet
                class="ma-2 pa-2"
            >
                <v-btn 
                    exact 
                    to="/manual-lists" 
                    text="Manuals" 
                    value="manuals"
                    variant="text"
                    selected-class="bg-black"
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