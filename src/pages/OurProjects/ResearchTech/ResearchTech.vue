<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import Card from "./Card/Card.vue";
  
  const items = [
    {
      icon: 'message-chat.svg',
      title: 'Data-Driven Conversational Games',
      text: `Our games are backed by research, rigorously tested and optimized. We've published studies on conversational interfaces at leading international conferences. <a href="https://dl.acm.org/doi/10.1145/3610661.3617150" target="_blank" class="text-[#087BB4] underline text-[18px]"><b>Read more!</b></a>`,
    },
    {
      icon: 'network-circle.svg',
      title: 'Google Cloud Natural Language Processing',
      text: `Google Cloud's Natural Language Processing uses machine learning to turn speech into text, enabling users to interact with Audemy through an audio-focused interface. <a href="#" target="_blank" class="text-[#087BB4] underline text-[18px]"><b>Learn  more!</b></a>`,
    },
    {
      icon: 'eye.svg',
      title: 'Screen Reader Compatibility',
      text: `Our game interface is keyboard-friendly, enabling blind and visually impaired students to navigate, select games, and answer questions with simple keystrokes.`,
    },
  ];
  
  let smallScreen = ref(window.innerWidth <= 450);
  
  const updateScreenWidth = () => {
    smallScreen.value = (window.innerWidth <= 450);
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
  });
</script>

<template>
  <div
    class="relative flex flex-col py-[8rem] items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
    <div class="w-full">
      <h3 class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px]">
        RESEARCH & TECHNOLOGIES</h3>
    </div>
    <div class="max-w-[519px]">
      <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]">
      What makes our platform accessible and engaging</h2>
    </div>
    <div class="flex justify-center">
      <div class="max-w-[75%] w-full">
        <div id="div_researchtech" class="flex justify-between mt-[110px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4">
          <Card v-for="item in items" :icon="item.icon" :title="item.title" :text="item.text" :url="item.url" :smallScreen="smallScreen">
          </Card>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <a href="/game-zone"
        class="font-poppins font-semibold w-[244px] px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300  text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D]">
        Try out our games!
      </a>
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 450px) {
  #div_researchtech {
    flex-wrap: wrap;
  }
}
</style>