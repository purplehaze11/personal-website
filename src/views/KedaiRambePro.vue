<template>
  <main>
    <ProjectBanner :photos="photos" titleProject="Kedai Rambe" />
  </main>
</template>

<script setup>
import ProjectBanner from '@/components/Project/ProjectBanner.vue'
import kedairambe1 from '../assets/kedairambe1.jpeg'
import kedairambe2 from '../assets/kedairambe2.jpeg'
import kedairambe3 from '../assets/kedairambe3.jpeg'

const photos = [kedairambe1, kedairambe2, kedairambe3]
</script>
