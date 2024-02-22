<template>
  <div>
    <h1>{{ props.titleProject }}</h1>
    <div class="p-4 space-x-4 max-w-md carousel carousel-center bg-neutral rounded-box">
      <CarouselPhoto v-for="(item, index) in props.photos" :key="index" :link="item" />
    </div>
  </div>
</template>

<script setup>
import CarouselPhoto from './ProjectComponent/CarouselPhoto.vue'

const props = defineProps({
  titleProject: String,
  photos: Array
})
</script>
