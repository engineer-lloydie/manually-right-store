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
                            <v-btn class="ms-1" color="medium-emphasis" icon="mdi-magnify" />
                            <v-btn class="ms-1" color="medium-emphasis" icon="mdi-cart" />
                            <v-btn class="ms-1" color="medium-emphasis" icon="mdi-account" />
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
import { shallowRef } from 'vue'

const appTitle = ref("Upright Manual");
const sidebar = ref(false);
const tab = ref("one");

const menuItems = ref([
    { title: "Home", path: "/home", icon: "mdi-home" },
    { title: "Sign Up", path: "/signup", icon: "mdi-login-variant" },
    { title: "Sign In", path: "/signin", icon: "mdi-lock-open" },
]);

const drawer = shallowRef(false)
</script>

<style lang="scss" scoped>
.floating-header {
    background-color: #bbbbbb !important;
    color: white !important;
    margin: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1400px;

    .v-btn {
        color: white !important;

        &:hover {
            background-color: rgba(#26a69a, 0.3) !important;
        }
    }
}
</style>