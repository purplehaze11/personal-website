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
        <div class="flex items-center">
          <img class="p-2 w-20 h-20 me-2" :src="toolsImg" alt="tools" />
          <p class="text-5xl">{{ toolsName }}</p>
        </div>

        <p>Soon to be added:</p>
        <ul>
          <li>Excel</li>
          <li>PostgreSQL</li>
        </ul>
        <!-- <div class="flex flex-wrap"> -->
        <!--   <div class="flex" v-for="(item, index) in toolsImg" :key="index"> -->
        <!--     <img -->
        <!--       class="p-2 w-20 h-20 border border-gray-300" -->
        <!--       :src="item.link" -->
        <!--       alt="" -->
        <!--     /> -->
        <!--     <p class="text-xl">{{ item.name }}</p> -->
        <!--   </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import htmlLogo from "../images/html-5-svgrepo-com.svg";
import cssLogo from "../images/css3-logo-svgrepo-com.svg";
import jsLogo from "../images/Unofficial_JavaScript_logo_2.svg";
import vueLogo from "../images/logo.svg";
import nuxtLogo from "../images/icon-green.svg";
import tailwindLogo from "../images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";

const toolsName = ref("HTML");
const toolsImg = ref(htmlLogo.src);
const interval = ref();

const nextElement = (list, value) => {
  const currentIndex = list.indexOf(value);
  const nextIndex = (currentIndex + 1) % list.length;
  const nextValue = list[nextIndex];
  return nextValue;
};

const changeTitle = () => {
  interval.value = setInterval(() => {
    const toolsNames = [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue JS",
      "Nuxt",
      "TailwindCSS",
    ];
    const toolsImgs = [
      htmlLogo.src,
      cssLogo.src,
      jsLogo.src,
      vueLogo.src,
      nuxtLogo.src,
      tailwindLogo.src,
    ];
    toolsName.value = nextElement(toolsNames, toolsName.value);
    toolsImg.value = nextElement(toolsImgs, toolsImg.value);
  }, 3000);
};

onMounted(changeTitle);

onBeforeUnmount(() => clearInterval(interval.value));

const toolsjImg = [
  {
    // link: htmlLogo.src, cssLogo.src, jsLogo.src, vueLogo.src, nuxtLogo.src, tailwindLogo.src
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
