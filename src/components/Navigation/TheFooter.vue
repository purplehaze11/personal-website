<template>
  <footer class="p-2 mt-2 text-black rounded bg-primary footer footer-center">
    <nav class="grid grid-flow-col gap-4">
      <p class="text-xl">Contact me by:</p>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a><IconWhatsapp /></a>
        <a><IconLinkedin /></a>
        <a><IconInstagram /></a>
      </div>
    </nav>
    <aside>
      <p>Created by: Tio Rambe Putra</p>
    </aside>
  </footer>
</template>

<script setup>
import IconInstagram from '../Icon/IconInstagram.vue'
import IconLinkedin from '../Icon/IconLinkedin.vue'
import IconWhatsapp from '../Icon/IconWhatsapp.vue'
</script>
