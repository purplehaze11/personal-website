<template>
  <div class="m-4 text-justify">
    <p class="mb-2">{{ props.p1 }}</p>
    <p>{{ props.p2 }}</p>
    <div class="flex justify-center mt-4">
      <a v-if="props.url !== '/'" :href="props.url" target="_blank" class="btn btn-primary"
        >Kunjungi Website</a
      >
      <router-link v-else to="/" class="btn btn-primary">Kembali ke Home</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  p1: String,
  p2: String,
  url: String
})
</script>
