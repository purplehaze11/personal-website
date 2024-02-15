<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />

  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/Shared/TheNavbar.vue'
import TheFooter from './components/Shared/TheFooter.vue'
</script>
