<template>
    <div>
        <div>
            <banner/>
        </div>
        <div class="my-15">
            <suggested-products title="Latest Products" flag="latest_products" :processing="fetchingLatestProducts" :manual-items="latestProducts"/>
        </div>
        <div class="my-15">
            <suggested-products title="Best Selling" flag="best_selling" :processing="fetchingBestSelling" :manual-items="bestSelling"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Home Page'
})

useHead({
    title: "Affordable Aircraft Manuals in PDF Format | Manuallyright",
    meta: [
        { name: 'description', content: "Get affordable aircraft manuals, POHs, and PIMs in PDF format from Manuallyright. Easy access to digital aviation resources for pilots and aircraft owners." },
        { property: 'og:title', content: "Aircraft Manuals & Aviation Supplies at Low Prices | Manuallyright" },
        { property: 'og:description', content: "Download affordable aircraft manuals, POHs, and PIMs in convenient PDF format. Manuallyright is your trusted source for digital aviation resources." },
        { property: 'og:type', content: 'product' }
    ]
});

const bestSelling = ref([]);
const latestProducts = ref([]);
const fetchingBestSelling = ref(false);
const fetchingLatestProducts = ref(false);

const getBestSelling = async () => {
    try {
        fetchingBestSelling.value = true;

        const { data } = await useBaseFetch('/items/best-selling');

        bestSelling.value = data;
    } catch (error) {
        console.error(error)
    } finally {
        fetchingBestSelling.value = false;
    }
}

const getLatestProducts = async () => {
    try {
        fetchingLatestProducts.value = true;

        const { data } = await useBaseFetch('/items/latest');

        latestProducts.value = data;
    } catch (error) {
        console.error(error)
    } finally {
        fetchingLatestProducts.value = false;
    }
}

onMounted(() => {
    getBestSelling();
    getLatestProducts();
})
</script>

<style scoped>

</style>