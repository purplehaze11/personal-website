<template>
  <header>
    <TheNavbar />
  </header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>

  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/Navigation/TheNavbar.vue'
import TheFooter from './components/Navigation/TheFooter.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
