<template>
    <v-carousel 
        hide-delimiter-background
        show-arrows="hover"
        cycle
    >
        <template v-if="fetching">
            <v-carousel-item>
                <v-sheet
                    height="100%"
                >
                    <div class="d-flex align-center justify-center fill-height">
                        <v-progress-circular
                            color="grey-lighten-4"
                            indeterminate
                        ></v-progress-circular>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </template>
        <template v-else>
            <template v-if="!bannerImages.length">
                <v-carousel-item>
                    <v-sheet
                        height="100%"
                        color="red-lighten-1"
                    >
                        <div class="d-flex align-center justify-center fill-height">
                            <p>No banners found.</p>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </template>
            <template v-else>
                <v-carousel-item v-for="(slide, i) in bannerImages" :key="i">
                    <v-sheet
                        height="100%"
                    >
                        <div class="d-flex fill-height justify-center align-center">
                            <v-img :src="slide.url" lazy-src="~/assets/images/image-icon.png" width="100%" height="100%" class="fill-height">
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular
                                            color="grey-lighten-4"
                                            indeterminate
                                        ></v-progress-circular>
                                    </div>
                                </template>
                                
                            </v-img>
                        </div>
                    </v-sheet>
                </v-carousel-item>
            </template>
        </template>
    </v-carousel>
</template>

<script setup>
const bannerImages = ref([]);
const fetching = ref(false);

const getBanners = async () => {
    try {
        fetching.value = true;
        
        const { banners } = await useBaseFetch('/banners/client', {
            method: 'get'
        })

        bannerImages.value = banners;
    } catch (error) {
        console.error(error);
    } finally {
        fetching.value = false;
    }
}

onMounted(() => {
    getBanners();
})
</script>

<style lang="scss" scoped>
.v-carousel {
  height: 300px;
}

.v-img {
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
}
</style>