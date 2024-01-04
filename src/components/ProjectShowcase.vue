<template>
  <div>
    <ProjectCard @click="showModal" />
    <ProjectModal />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

const showModal = () =>
  document.getElementById("kedai_rambe_project").showModal();
</script>
