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
                            <!-- Search Result items -->
                            <v-menu
                                v-model="menu"
                                :close-on-content-click="false"
                                close-on-back
                                :open-on-focus="true"
                                transition="scale-transition"
                                :max-width="700" 
                                width="700" 
                                :max-height="600"
                            >
                                <template v-slot:activator="{ props }">
                                    <v-text-field
                                        label="Search manuals"
                                        variant="solo"
                                        hide-details
                                        width="300"
                                        v-bind="props"
                                        class="global-search"
                                        append-inner-icon="mdi-magnify"
                                        v-model="searchQuery"
                                        @input="search"
                                    ></v-text-field>
                                </template>
                                <v-card min-width="300" title="Search Results">
                                    <template v-slot:append>
                                        <v-btn
                                            density="comfortable"
                                            icon="$close"
                                            variant="plain"
                                            @click="menu = !menu"
                                        ></v-btn>
                                    </template>
                                    <v-card-item>
                                        <v-card-text>
                                            <template v-if="searching">
                                                <v-skeleton-loader
                                                    :loading="searching"
                                                    type="list-item-avatar-two-line"
                                                ></v-skeleton-loader>
                                            </template>
                                            <template v-else>
                                                <template v-if="searchResult.length">
                                                    <v-sheet
                                                        class="cursor-pointer"
                                                        v-for="(item, index) in searchResult"
                                                        :key="item.id" 
                                                        @click="navigateTo(`/manuals/categories/${item.main_url_slug}/${item.sub_url_slug}/${item.url_slug}`)"
                                                    >
                                                        <v-hover
                                                            v-slot="{ isHovering, props }"
                                                            open-delay="200"
                                                        >
                                                            <v-row align="center" class="search-result-row" :class="{ 'on-hover': isHovering }" v-bind="props">
                                                                <v-col class="d-flex justify-between d-sm-inline" cols="12" sm="2">
                                                                    <v-img 
                                                                        :src="item.thumbnail_url"
                                                                        lazy-src="~/assets/images/image-icon.png"
                                                                        width="70"
                                                                        height="70"
                                                                        rounded
                                                                    >
                                                                        <template v-slot:placeholder>
                                                                            <div class="d-flex align-center justify-center fill-height">
                                                                                <v-progress-circular
                                                                                    color="grey-lighten-4"
                                                                                    indeterminate
                                                                                ></v-progress-circular>
                                                                            </div>
                                                                        </template>
                                                                    </v-img>
                                                                </v-col>
                                                                <v-col class="text-center text-sm-left" cols="12" sm="8">
                                                                    <h5 class="mb-1">{{ item.title }}</h5>
                                                                </v-col>
                                                                <v-col cols="12" sm="2">
                                                                    <h4 class="price-text-color text-center">${{ item.price }}</h4>
                                                                </v-col>
                                                                <v-divider v-if="(index + 1) != searchResult.length"></v-divider>
                                                            </v-row>
                                                        </v-hover>
                                                    </v-sheet>
                                                </template>
                                                <p v-else class="text-center">No records found</p>
                                            </template>
                                        </v-card-text>
                                    </v-card-item>
                                </v-card>
                            </v-menu>
                            
                            <cart-items class="mx-2"/>

                            <v-divider vertical inset></v-divider>

                            <v-menu>
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
                                        <v-list-item-title @click="navigateTo('/orders')">{{ isAuthenticated ? 'View Orders' : 'View Guest Orders' }}</v-list-item-title>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item value="logout">
                                        <v-list-item-title color="red-lighten-1" @click="handleDialog()">{{ isAuthenticated ? 'Logout' : 'SignIn' }}</v-list-item-title>
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
const menu = ref(false);
const showAlert = ref(false);
const alertMessage = ref(null);
const searchResult = ref([]);
const searchQuery = ref('');

const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const search = debounce(async () => {
    try {
        menu.value = true;
        searching.value = true;

        const { data } = await useBaseFetch('/items/search', {
            method: 'GET',
            params: {
                search: searchQuery.value
            }
        });

        searchResult.value = data;
    } catch (error) {
        console.error(error);
    } finally {
        searching.value = false;
    }
});

const logoutDialog = ref(false);

const handleDialog = () => {
    if (isAuthenticated.value) {
        logoutDialog.value = true;
    } else {
        $showModal('auth-modal');
    }
}

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

.search-result-row:hover {
    background-color: #F5F5F5;
}
</style>