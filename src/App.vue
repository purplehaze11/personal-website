<template>
  <header>
    <TheNavbar />
  </header>

  <RouterView />

  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/Navigation/TheNavbar.vue'
import TheFooter from './components/Navigation/TheFooter.vue'
</script>
