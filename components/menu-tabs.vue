<template>
    <div class="d-flex justify-end">
        <v-sheet
            class="ma-2 pa-2"
        >
            <v-btn 
                exact 
                to="/manuals/categories" 
                text="Manuals" 
                value="manuals"
                variant="text"
                active-color="red-lighten-1"
            ></v-btn>
            <v-btn
                exact
                to="/contact-us" 
                text="Contact Us" 
                value="contact_us"
                variant="text"
                active-color="red-lighten-1"
            ></v-btn>
        </v-sheet>
    </div>
</template>

<script setup>
const tab = ref(null);
</script>

<style lang="scss" scoped>

</style>