<template>
  <form @submit.prevent="submitForm" class="neo-brutalism bg-neo-blue text-white p-8">
    <div class="mb-4">
      <label for="name" class="block mb-2">Name</label>
      <input v-model="form.name" type="text" id="name" name="name" required class="w-full p-2 text-black" />
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-2">Email</label>
      <input v-model="form.email" type="email" id="email" name="email" required class="w-full p-2 text-black" />
    </div>
    <div class="mb-4">
      <label for="message" class="block mb-2">Message</label>
      <textarea v-model="form.message" id="message" name="message" required class="w-full p-2 text-black" rows="4"></textarea>
    </div>
    <button type="submit" class="bg-white text-black py-2 px-4 font-bold hover:bg-neo-yellow transition-colors">Send Message</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form);
  // Reset the form after submission
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>