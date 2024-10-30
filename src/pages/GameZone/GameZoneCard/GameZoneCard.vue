<!-- <script setup>
import { onMounted, defineProps, computed } from 'vue';

const props = defineProps({
  icon: String,
  title: String,
  url: String,
  bgColor: String,
  textColor: String,
});
</script>

<template>
  <div
    class="w-[484px] h-[404px] rounded-[16px] border-[2px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] p-5 relative flex justify-center items-center" :style="{backgroundColor: props.bgColor || '#EAF7FD'}">
    <img :src="icon" alt="Game icon" class="w-[280px] h-[200px]">
    <h3 class="absolute bottom-10 font-paytone font-[800] text-[40px] text-stroke" :style="{color: props.textColor || '#5391AC'}">{{ title }}</h3>
  </div>
</template>

<style>
.text-stroke {
  text-shadow: -1px -1px 0 #2F3E45, 1px -1px 0 #2F3E45, -1px 1px 0 #2F3E45, 1px 1px 0 #2F3E45;
}
</style> -->

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: String,
    title: String,
    url: String,
});
</script>

<template>
    <div
        @click="$emit('selectGame', url)"
        class="w-[484px] h-[404px] bg-[#EAF7FD] rounded-[16px] border-[2px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] p-5 relative flex justify-center items-center"
    >
        <img :src="icon" alt="Game icon" width="w-[280px] h-[200px]" />
        <h3
            class="absolute bottom-10 font-paytone text-[#5391AC] font-[800] text-[40px] text-stroke"
        >
            {{ title }}
        </h3>
    </div>
</template>

<style>
.text-stroke {
    text-shadow: -1px -1px 0 #2f3e45, 1px -1px 0 #2f3e45, -1px 1px 0 #2f3e45,
        1px 1px 0 #2f3e45;
}
</style>
