<script setup>
import Students from "../../../assets/images/impact/students 1.svg";
import Problems from "../../../assets/images/impact/problems 1.svg";
import Globe from "../../../assets/images/impact/globe 1.svg";
</script>


<template>
  <div class="grid grid-cols-[.5fr_1fr] gap-x-10 ">
    <div class="flex flex-col justify-start gap-y-8">
      <h1 class="font-poppins text-4xl leading-normal text-title">Our impact in<br> less than a year</h1>

      <p class="font-poppins text-body text-xl leading-8">
        Bridging the educational gap for visually impaired learners with interactive audio learning.
      </p>
      <a href="/impact"
        class=" font-poppins font-semibold px-12 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] font-semibold self-start duration-300">
        Explore our impact further
      </a>
    </div>
    <div class="flex items-center gap-x-7 ml-auto">
      <div class="bg-card-background flex flex-col items-center rounded-xl border-2 border-[#C5DBE2]  pb-3 px-3">
        <img :src=Students alt="" class="-translate-y-10">
        <div class="flex flex-col items-center text-body">
          <h1 class="font-poppins font-medium text-2xl ">1000+</h1>
          <p class="font-poppins text-base text-center">students <br> impacted</p>
        </div>
      </div>

      <div
        class="bg-card-background flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] translate-y-1/4 pb-3 px-3">
        <img :src=Problems alt="" class="-translate-y-10">
        <div class="flex flex-col items-center text-body">
          <h1 class="font-poppins font-medium text-2xl ">20000+</h1>
          <p class="font-poppins text-base text-center">problems <br> solved</p>
        </div>
      </div>

      <div class="bg-card-background flex flex-col items-center rounded-xl border-2 border-[#C5DBE2]  pb-3 px-3">
        <img :src=Globe alt="" class="-translate-y-10">
        <div class="flex flex-col items-center text-body">
          <h1 class="font-poppins font-medium text-2xl ">7+</h1>
          <p class="font-poppins text-base text-center ">collaborating <br> schools</p>
        </div>
      </div>

    </div>
  </div>
</template>