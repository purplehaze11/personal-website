<template>
  <div class="min-h-screen hero bg-base-200">
    <div class="flex-col lg:flex-row hero-content">
      <img
        src="../images/TioRambePutra.jpg"
        class="rounded-lg shadow-2xl max-w-48"
        alt="my photo"
      />
      <div>
        <h1 class="text-5xl font-bold">Tio Rambe Putra</h1>
        <p class="py-6">My toolbox fills with:</p>
        <div v-for="(item, index) in toolsImg" :key="index">
          <img :src="item.link" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import htmlLogo from "../images/HTML5_Logo.svg";
import cssLogo from "../images/CSS3_logo_and_wordmark.svg.png";
import jsLogo from "../images/Unofficial_JavaScript_logo_2.svg";
import vueLogo from "../images/logo.svg";
import nuxtLogo from "../images/icon-green.svg";
import tailwindLogo from "../images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";

const toolsImg = [
  {
    link: htmlLogo.src,
    name: "HTML",
  },
  {
    link: cssLogo.src,
    name: "CSS",
  },

  {
    link: jsLogo.src,
    name: "JavaScript",
  },
  {
    link: vueLogo.src,
    name: "Vue JS",
  },
  {
    link: nuxtLogo.src,
    name: "Nuxt",
  },
  {
    link: tailwindLogo.src,
    name: "TailwindCSS",
  },
];
</script>
