<template>
  <main class="mx-auto max-w-screen-md">
    <ProjectBanner :photos="photos" titleProject="Personal Website" />
    <ProjectContent :p1="p1" :p2="p2" url="/" />
  </main>
</template>

<script setup>
import ProjectBanner from '@/components/Project/ProjectBanner.vue'
import ProjectContent from '@/components/Project/ProjectContent.vue'

import personalwebsite1 from '../assets/personalwebsite1.jpeg'
import personalwebsite2 from '../assets/personalwebsite2.jpeg'
import personalwebsite3 from '../assets/personalwebsite3.jpeg'

const photos = [personalwebsite1, personalwebsite2, personalwebsite3]

const p1 =
  'Website ini adalah website kedua yang pernah saya buat. Website ini adalah website pribadi yang menampilkan portofolio saya. Website ini sendiri bersifat statis dan dibuat hanya menggunakan VueJS, TailwindCSS, dan DaisyUI.'

const p2 =
  'Website ini masih memiliki banyak sekali kekurangan terutama dalam hal UI design. Oleh sebab itu, anda dapat memberikan kritik maupun saran kepada saya melalui kontak yang ada. Pengembangan website ini kedepannya hanya akan berkutat pada design ketimbang fungsi.'
</script>
