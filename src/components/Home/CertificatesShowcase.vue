<template>
  <div class="p-2 m-2 border-2 border-solid border-secondary">
    <ul>
      <li class="my-5" v-for="(certificate, index) in certificates" :key="index">
        <a class="underline underline-offset-4" :href="certificate.link">
          {{ certificate.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const certificates = ref([
  {
    name: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/Purple-Haze/responsive-web-design'
  },
  {
    name: 'JavaScript Algorithims and Data Structures',
    link: 'https://www.freecodecamp.org/certification/Purple-Haze/javascript-algorithms-and-data-structures'
  },
  {
    name: 'Vue Masterclass (Covers Vue 2 and 3)',
    link: 'https://www.udemy.com/certificate/UC-2c59d40d-28e6-4561-9dea-24784c24786b/'
  },
  {
    name: '15 Days of SQL: The Complete SQL Masterclass 2024',
    link: 'https://www.udemy.com/certificate/UC-e27d23be-6971-44d4-8bc6-e8297fbd5044/'
  },
  {
    name: 'Microsoft Excel - Excel from Beginner to Advanced',
    link: 'https://www.udemy.com/certificate/UC-15d84a6f-5a45-4279-8c04-6cabdc528857/'
  }
])
</script>
