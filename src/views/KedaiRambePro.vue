<template>
  <main class="mx-auto max-w-screen-md">
    <ProjectBanner :photos="photos" titleProject="Kedai Rambe" />
    <ProjectContent :p1="p1" :p2="p2" url="https://kedairambe.biz.id/" />
  </main>
</template>

<script setup>
import ProjectBanner from '@/components/Project/ProjectBanner.vue'
import ProjectContent from '@/components/Project/ProjectContent.vue'

import kedairambe1 from '../assets/kedairambe1.jpeg'
import kedairambe2 from '../assets/kedairambe2.jpeg'
import kedairambe3 from '../assets/kedairambe3.jpeg'

const photos = [kedairambe1, kedairambe2, kedairambe3]

const p1 =
  'Website Kedai Rambe adalah website yang pertama kali saya buat. Website ini adalah sebuah website perusahaan katering dimana pembeli dapat memesan katering secara online. Website ini dibuat menggunakan Nuxt JS, TailwindCSS, dan Daisyui.'

const p2 =
  'Untuk saat ini, website hanya bersifat sebagai project dan belum berfungsi sebagaimana mestinya. Website ini akan dibangun ulang menggunakan ExpressJS, Vue Js, serta PostgreSQL atau MySQL nantinya.'
</script>
