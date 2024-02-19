<template>
  <main class="mx-auto max-w-screen-md">
    <TheBanner />
    <div class="mx-4 divider divider-secondary"></div>
    <ProjectShowcase />
    <div class="mx-4 divider divider-secondary"></div>
    <CertificatesShowcase />
  </main>
</template>

<script setup>
import TheBanner from '../components/Home/TheBanner.vue'
import CertificatesShowcase from '../components/Home/CertificatesShowcase.vue'
import ProjectShowcase from '../components/Home/ProjectShowcase.vue'
</script>
