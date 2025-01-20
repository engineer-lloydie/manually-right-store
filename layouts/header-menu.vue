<template>
    <v-layout>
        <v-app-bar elevation="3" color="grey-lighten-3" height="100">
            <v-container>
                <v-row align="center">
                    <v-col cols="4">
                        <v-img class="me-sm-8" max-width="200" src="~/assets/images/partial-logo.png" />
                    </v-col>
                    <v-col cols="8">
                        <div class="d-flex justify-end align-center">
                            <v-text-field
                                :loading="searching"
                                append-inner-icon="mdi-magnify"
                                density="compact"
                                label="Search templates"
                                variant="solo"
                                hide-details
                                single-line
                                @click:append-inner="search"
                                max-width="300"
                            ></v-text-field>
                            <v-btn class="ms-1" 
                                color="grey-darken-3" 
                                icon="mdi-account"
                                density="comfortable"
                            >
                            </v-btn>
                            <v-btn class="ms-1" 
                                color="grey-darken-3"
                                icon="mdi-cart"
                                density="comfortable"
                            >
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-main class="my-5">
            <v-container>
                <v-tabs
                    :model-value="tab"
                    align-tabs="end"
                    color="grey-darken-4"
                    :mobile="false"
                >
                    <v-tab v-if="initialized" text="Manuals" value="manuals"></v-tab>
                    <v-tab v-if="initialized" text="Contact Us" value="contact_us"></v-tab>
                </v-tabs>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
const tab = ref(null);
const initialized = ref(false);

onMounted(() => {
    initialized.value = true;
});

const searching = ref(false);
const search = () => {
    searching.value = true;
};
</script>

<style lang="scss" scoped>

</style>