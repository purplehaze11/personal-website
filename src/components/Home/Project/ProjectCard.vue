<template>
  <div class="my-4 w-full shadow-xl md:w-80 card card-compact bg-neutral">
    <figure>
      <img :src="props.link" alt="Proyek" />
    </figure>
    <div class="items-center text-center card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <div v-if="props.button == 'Coming Soon'" class="justify-end card-actions">
        <button class="btn btn-primary" disabled>{{ props.button }}</button>
      </div>
      <div v-else class="justify-end card-actions">
        <button @click="goToProject" class="btn btn-primary">{{ props.button }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  link: String,
  title: String,
  button: String,
  url: String
})

const project = props.url

const goToProject = () => {
  router.push(`/projects/${project}`)
}
</script>
