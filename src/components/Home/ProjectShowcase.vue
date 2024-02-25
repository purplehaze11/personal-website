<template>
  <div>
    <div class="my-2 mx-4">
      <h2 class="text-2xl text-primary">My Projects</h2>
    </div>
    <div class="m-4 md:flex md:flex-wrap md:gap-4 md:justify-between">
      <ProjectCard
        v-for="(item, index) in cardContent"
        :key="index"
        :link="item.link"
        :title="item.title"
        :button="item.button"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ProjectCard from './Project/ProjectCard.vue'

const cardContent = ref([
  {
    link: 'kedairambehome.jpeg',
    title: 'Kedai Rambe',
    url: 'kedairambe',
    button: 'Lihat Detail'
  },
  {
    link: 'tiorambehome.jpeg',
    title: 'Personal Website',
    url: 'personalwebsite',
    button: 'Lihat Detail'
  },
{
    link: 'https://placehold.co/400x400?text=Coming+Soon',
    title: 'Talky',
    url: 'talky',
    button: 'Coming Soon'
  }
])
</script>
