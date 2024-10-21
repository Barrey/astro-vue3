<template>
  <article class="neo-brutalism bg-white p-6">
    <h3 class="text-2xl font-bold mb-2">
      <a :href="url">{{ title }}</a>
    </h3>
    <p class="text-gray-600 mb-4">{{ date }}</p>
    <p class="mb-4">{{ description }}</p>
    <a :href="url" class="inline-block bg-neo-pink text-white py-2 px-4 font-bold hover:bg-neo-yellow hover:text-black transition-colors">Read More</a>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  date: String,
  url: String
});
</script>