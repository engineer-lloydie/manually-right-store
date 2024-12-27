<template>
	  <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-img :src="item.src" class="fill-height"></v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script setup>
const items = ref([
  { src: 'https://images.squarespace-cdn.com/content/v1/55844813e4b071e9971808b9/1597427514962-T9MIZDJG5VT6D88UUOLJ/IMG-2659.jpg?format=2500w' }, // Replace with actual image URLs
  { src: 'https://www.bfischool.org/wp-content/uploads/2024/05/atomic-habits2.jpg' }, // Replace with actual image URLs
  { src: 'https://cdnb.artstation.com/p/assets/images/images/033/802/813/large/bhupesh-ponia-item-book-cover-mode-illustrator.jpg?1610603700' }  // Replace with actual image URLs
]);
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