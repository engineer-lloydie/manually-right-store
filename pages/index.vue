<template>
    <div>
        <div>
            <banner/>
        </div>
        <div class="my-15">
            <suggested-products title="Our Best Selling" flag="best_selling" :manual-items="manualItems"/>
        </div>
        <div class="my-15">
            <suggested-products title="Our Latest Products" flag="latest_products" :manual-items="manualItems"/>
        </div>
    </div>
</template>

<script setup>
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