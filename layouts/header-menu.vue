<template>
    <div>
        <v-card elevation="3" color="grey-lighten-3" class="d-flex align-center" height="100%">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="4" class="d-flex justify-md-start justify-center align-center">
                        <v-img 
                            @click="$router.push('/')"
                            class="me-sm-8 cursor-pointer"
                            max-width="200"
                            src="~/assets/images/partial-logo.png"
                        />
                    </v-col>
                    <v-col cols="12" sm="12" md="8" class="d-flex justify-center justify-md-end align-center">
                        <div class="d-flex align-center">
                            <v-text-field
                                :loading="searching"
                                append-inner-icon="mdi-magnify"
                                density="compact"
                                label="Search templates"
                                variant="solo"
                                hide-details
                                single-line
                                width="300"
                                @click:append-inner="search"
                                class="global-search"
                            ></v-text-field>
                            
                            <cart-items class="mx-2"/>

                            <v-divider vertical inset></v-divider>

                            <v-btn
                                v-if="!isAuthenticated"
                                color="grey-darken-1"
                                class="text-none mx-2"
                                density="compact"
                                size="40"
                                rounded="circle"
                                variant="text"
                                stacked
                                @click="$showModal('auth-modal')"
                            >
                                <v-icon>mdi-account</v-icon>
                            </v-btn>
                            <v-menu v-else>
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        color="grey-darken-1"
                                        class="text-none mx-2"
                                        density="compact"
                                        size="40"
                                        rounded="circle"
                                        variant="text"
                                        v-bind="props"
                                        stacked
                                    >
                                        <v-icon>mdi-account</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item value="orders">
                                        <v-list-item-title @click="navigateTo('/orders')">View Orders</v-list-item-title>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item value="logout">
                                        <v-list-item-title color="red-lighten-1" @click="logoutDialog = true;">Logout</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-dialog
            v-model="logoutDialog"
            width="auto"
        >
            <v-card
                max-width="400"
                prepend-icon="mdi-update"
                text="Are you sure you want to logout?"
                title="Logout"
            >
                <template v-slot:actions>
                    <v-btn
                        class="ms-auto"
                        text="Cancel"
                        @click="logoutDialog = false"
                    ></v-btn>
                    <v-btn
                        class="ms-auto"
                        text="Yes"
                        @click="logoutUser"
                    ></v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
const { isAuthenticated } = useSanctumAuth();
const { $showModal, $logout } = useNuxtApp()

const searching = ref(false);
const search = () => {
    searching.value = true;
};
const logoutDialog = ref(false);

const logoutUser = (async () => {
    try {
        await $logout();
        logoutDialog.value = false;
    } catch (error) {
        console.error(error)
    }
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 430px) {
    .global-search {
        width: 60vw !important;
    }
    
}
</style>