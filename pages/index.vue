<template>
    <div>
        <div>
            <banner/>
        </div>
        <div class="my-15">
            <suggested-products title="Our Best Selling" flag="best_selling" :processing="fetchingBestSelling" :manual-items="bestSelling"/>
        </div>
        <div class="my-15">
            <suggested-products title="Our Latest Products" flag="latest_products" :processing="fetchingLatestProducts" :manual-items="latestProducts"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Home Page'
})

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

const manualItems = ref([
    {
        id: 1,
        category_slug: 'category-1',
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 2,
        category_slug: 'category-2',
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 3,
        category_slug: 'category-3',
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    },
    {
        id: 4,
        category_slug: 'category-4',
        url_slug: 'air-space-model',
        name: 'Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)',
        description: "Air & Space Model 18A Gyroplane Maintenance & Rigging Manual 1965 (Report No. UER 18-601)",
        price: 100
    }
]);
</script>

<style scoped>

</style>