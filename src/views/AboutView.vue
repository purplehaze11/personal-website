<template>
  <main class="mx-auto max-w-screen-md">
    <div class="m-4">
      <h1 class="mb-2 text-2xl text-primary">About Me</h1>
      <p class="text-justify">
        Ini adalah beberapa informasi mengenai saya. Anda dapat mengunduh resume saya
        <a @click="downloadResume" class="underline underline-offset-2 text-primary" href="#"
          >di sini.</a
        >
      </p>
    </div>
    <AboutBio />
  </main>
</template>

<script setup>
import AboutBio from '../components/About/AboutBio.vue'

const downloadResume = () => {
  const resume = 'resume.pdf'
  const link = document.createElement('a')
  link.href = resume
  link.download = 'Resume_Tio_Rambe_Putra.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
