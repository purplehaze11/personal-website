<template>
  <div class="my-4 mx-auto w-full shadow-xl card card-compact bg-neutral">
    <figure>
      <img :src="props.link" alt="Proyek" />
    </figure>
    <div class="items-center text-center card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <div v-if="props.button == 'Coming Soon'" class="justify-end card-actions">
        <button class="btn btn-primary" disabled>{{ props.button }}</button>
      </div>
      <div v-else class="justify-end card-actions">
        <button class="btn btn-primary">{{ props.button }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: String,
  title: String,
  button: String
})
</script>
