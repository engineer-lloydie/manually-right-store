<template>
    <v-layout>
        <v-app-bar elevation="0">
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

        <v-main class="mb-10">
            <v-tabs
                v-model="tab"
                align-tabs="end"
                bg-color="grey-darken-3"
                color="yellow-lighten-1"
                :mobile="false"
                class="elevation-6"
            >
                <v-tab text="Item One" value="one"></v-tab>
                <v-tab text="Item Two" value="two"></v-tab>
                <v-tab text="Item Three" value="three"></v-tab>
            </v-tabs>
        </v-main>
    </v-layout>
</template>
<script setup>
const tab = ref("one");
const searching = ref(false);

const menuItems = ref([
    // { path: "/home", icon: "mdi-magnify" },
    { path: "/signin", icon: "mdi-account" },
    { path: "/carts", icon: "mdi-cart", badge: true },
]);

const search = () => {
    searching.value = true;
};
</script>

<style lang="scss" scoped>

</style>