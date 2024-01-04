<template>
  <div>
    <CertificateCard @click="showModal" />
    <CertificateModal />
  </div>
</template>

<script setup>
import CertificateCard from "./CertificateCard.vue";
import CertificateModal from "./CertificateModal.vue";

const showModal = () =>
  document.getElementById("kedai_rambe_project").showModal();
</script>
