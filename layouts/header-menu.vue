<template>
    <v-layout>
        <v-app-bar elevation="3" color="grey-lighten-3" height="100">
            <v-container>
                <v-row align="center">
                    <v-col cols="4">
                        <v-img 
                            @click="$router.push('/')"
                            class="me-sm-8 cursor-pointer"
                            max-width="200"
                            src="~/assets/images/partial-logo.png"
                        />
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
                                class="px-4"
                            ></v-text-field>
                            
                            <v-btn
                                color="grey-darken-1"
                                class="text-none"
                                density="compact"
                                size="50"
                                rounded="circle"
                                stacked
                                @click="$showModal('auth-modal')"
                            >
                                <v-icon>mdi-account</v-icon>
                            </v-btn>
                            
                            <cart-items/>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-main>
            <v-container>
                <menu-tabs/>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script setup>
const { $showModal } = useNuxtApp()

const searching = ref(false);
const search = () => {
    searching.value = true;
};
</script>

<style lang="scss" scoped>

</style>