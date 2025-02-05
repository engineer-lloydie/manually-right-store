<template>
    <div>
        <v-sheet class="mb-10">
            <h1 class="text-center">{{ props.title }}</h1>
        </v-sheet>
        <v-sheet
            class="mx-auto"
            elevation="1"
            max-width="1200"
        >
            <v-slide-group
                class="pa-4"
                center-active
                show-arrows
                :mobile="false"
            >
                <v-slide-group-item
                    v-for="item in manualItems"
                    :key="item.id"
                >
                    <v-card
                        class="ma-4"
                        width="400"
                    >
                        <v-img
                            class="align-end text-white"
                            height="320"
                            src="~/assets/images/thumbnail.jpeg"
                        >
                        </v-img>

                        <v-card-title>{{ item.name }}</v-card-title>

                        <v-card-subtitle class="text-h6 font-weight-bold">
                            ${{ item.price }}.00
                        </v-card-subtitle>

                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-end">
                            <v-btn
                                :to="`/manuals/categories/${item.category_slug}/${item.url_slug}`"
                                color="white" 
                                text="View Details"
                                prepend-icon="mdi-text-box-search-outline"
                                elevation="2"
                                class="bg-grey-darken-3"
                            ></v-btn>
                            <v-btn 
                                color="white" 
                                text="Add to cart"
                                prepend-icon="mdi-cart-check"
                                elevation="2"
                                class="bg-red-lighten-1"
                            ></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    manualItems: {
        type: Array,
        required: true
    }
});
</script>

<style lang="scss" scoped>

</style>