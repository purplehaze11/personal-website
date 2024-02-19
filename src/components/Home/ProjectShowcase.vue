<template>
  <div>
    <div class="my-2 mx-4">
      <h2 class="text-2xl text-primary">My Projects</h2>
    </div>
    <div class="m-4">
      <ProjectCard
        v-for="(item, index) in cardContent"
        :key="index"
        :link="item.link"
        :title="item.title"
        :button="item.button"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ProjectCard from './Project/ProjectCard.vue'

const cardContent = ref([
  {
    link: 'home.jpeg',
    title: 'Kedai Rambe',
    button: 'Lihat Detail'
  },
  {
    link: 'https://placehold.co/600x400?text=Coming+Soon',
    title: 'Personal Website',
    button: 'Coming Soon'
  }
])
</script>
