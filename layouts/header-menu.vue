<template>
    <v-layout>
        <v-app-bar>
            <v-container>
                <v-row align="center">
                    <v-col cols="4">
                        <v-img class="me-sm-8" max-width="100" src="~/assets/images/partial-logo.png" />
                    </v-col>
                    <v-col cols="8">
                        <div class="d-flex justify-end">
                            <v-btn v-for="(item, index) in menuItems" 
                                :key="index" 
                                class="ms-1" 
                                color="medium-emphasis" 
                                :icon="item.icon" 
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-main height="200">
            <v-tabs
                v-model="tab"
                align-tabs="end"
                bg-color="grey-darken-3"
                color="yellow-lighten-1"
            >
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>
        </v-main>
    </v-layout>
</template>
<script setup>
const tab = ref("one");

const menuItems = ref([
    { path: "/home", icon: "mdi-magnify" },
    { path: "/signup", icon: "mdi-cart" },
    { path: "/signin", icon: "mdi-account" },
]);
</script>

<style lang="scss" scoped>

</style>