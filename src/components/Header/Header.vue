<template>
  <header class="grid grid-cols-[auto_1fr] items-center py-12 ">
    <div class="text-lg font-bold">
      <RouterLink to="/home"><img :src="logoPath" alt="logo" class="hover:cursor-pointer absolute top-7 h-[60px]" v-if="logoPath"></RouterLink>
      <p v-if="!logoPath">audemy</p>
      <!-- <RouterLink to="/home" class="hover:text-black"><img src="../../../src/assets/images/header/header-logo-2.png" alt="logo" class="hover:cursor-pointer absolute top-7 h-[60px]" /></RouterLink>-->
    </div>
    
    <ul :class="'flex space-x-8 justify-center font-poppins font-semibold '+(textColor??'text-[#151e22]')">
      <li>
        <RouterLink to="/home" class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about-us" class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]">About us</RouterLink>
      </li>
      <li>
        <RouterLink to="/our-projects" class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]">Our projects</RouterLink>
      </li>
      <li>
        <RouterLink to="/impact" class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]">Impact</RouterLink>
      </li>
      <li>
        <RouterLink to="/game-zone" class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]">Game zone</RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    logoPath: {
     type: [String, null],
      required: false
    },
    textColor: {
      type: [String, null],
      required: false
    }
  });
</script>

<style lang="scss" scoped></style>