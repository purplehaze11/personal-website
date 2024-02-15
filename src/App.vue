<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/Shared/TheNavbar.vue'
</script>
