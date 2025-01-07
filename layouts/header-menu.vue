<template>
    <v-layout>
        <v-app-bar class="px-md-4">
            <template #prepend>
                <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
            </template>

            <v-img class="me-sm-8" max-width="100" src="~/assets/images/partial-logo.png" />

            <v-spacer />

            <template #append>
                <v-btn class="ms-1" color="medium-emphasis" icon="mdi-account" />
                <v-btn class="ms-1" color="medium-emphasis" icon="mdi-cart" />

                <!-- <v-btn class="ms-1" icon>
                    <v-avatar image="https://cdn.vuetifyjs.com/images/john.png" />

                    <v-menu activator="parent" origin="top">
                        <v-list>
                            <v-list-item link title="Update profile" />

                            <v-list-item link title="Sign out" />
                        </v-list>
                    </v-menu>
                </v-btn> -->
            </template>
        </v-app-bar>

        <v-main height="200">
            <!--  -->
        </v-main>
    </v-layout>
</template>
<script setup>
import { shallowRef } from 'vue'

const appTitle = ref("Upright Manual");
const sidebar = ref(false);

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