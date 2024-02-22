<template>
  <div class="w-1/2 carousel-item">
    <img :src="props.link" class="rounded-box" />
  </div>
</template>

<script setup>
const props = defineProps({
  link: String
})
</script>
