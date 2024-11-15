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

    <div class="text-lg font-bold absolute right-[10rem]">
      <a href="/login" class="font-poppins font-semibold px-6 py-3 border-2 border-[#0C0D0D] rounded-[8px] bg-[#FFFFFF] hover:bg-[#E0E4E5] text-base text-center text-[#0D0C0C] font-semibold duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none" class="inline">
          <path d="M11 2H13C13.5531 2 14 2.44688 14 3V11C14 11.5531 13.5531 12 13 12H11C10.4469 12 10 12.4469 10 13C10 13.5531 10.4469 14 11 14H13C14.6562 14 16 12.6562 16 11V3C16 1.34375 14.6562 0 13 0H11C10.4469 0 10 0.446875 10 1C10 1.55313 10.4469 2 11 2ZM10.7063 7.70625C11.0969 7.31563 11.0969 6.68125 10.7063 6.29063L6.70625 2.29063C6.31563 1.9 5.68125 1.9 5.29063 2.29063C4.9 2.68125 4.9 3.31563 5.29063 3.70625L7.58437 6H1C0.446875 6 0 6.44688 0 7C0 7.55312 0.446875 8 1 8H7.58437L5.29063 10.2937C4.9 10.6844 4.9 11.3188 5.29063 11.7094C5.68125 12.1 6.31563 12.1 6.70625 11.7094L10.7063 7.70938V7.70625Z" fill="#151E22"/>
        </svg>&nbsp;&nbsp;
        Log in
      </a>
    </div>
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