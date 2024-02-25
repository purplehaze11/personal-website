<template>
  <footer class="py-2 mt-5 w-full text-black rounded bg-secondary footer footer-center">
    <nav class="">
      <p class="text-xl">Contact me by:</p>
    </nav>
    <nav>
      <div class="flex flex-col gap-4">
        <a class="flex">
          <IconEmail /><span class="text-lg leading-10 ms-2">tiorambe1104@gmail.com</span>
        </a>
        <a class="flex" href="https://www.linkedin.com/in/tio-rambe-putra/" target="_blank">
          <IconLinkedin /><span class="text-lg leading-10 ms-2">Tio Rambe Putra</span>
        </a>
        <a
          class="flex"
          href="https://www.instagram.com/tayorambe?igsh=MW9sbmwwaWRmaTA1Yw=="
          target="_blank"
        >
          <IconInstagram /><span class="text-lg leading-10 ms-2">@tayorambe</span>
        </a>
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
import IconEmail from '../Icon/IconEmail.vue'
</script>
