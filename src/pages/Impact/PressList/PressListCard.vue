<script setup>
const props = defineProps({
  smallScreen: Boolean,
  image: String,
  text: String,
  author: String
});
const path = '/src/assets/images/impact/';
</script>

<template>


  <div v-if="!smallScreen" class="w-full mx-1 flex flex-row justify-center h-auto">

    <div class="">

      <div class="flex flex-col justify-evenly h-[250px] tablet:w-[72px] tablet:h-[72px] rounded-[8px]">

        <!-- IMAGE -->
        <div class="mx-6">
          <img :src="path+image" class="h-[178px] w-[320px] rounded-2xl" alt="image" />
        </div>
        
        <!-- TEXT -->
        <div class="mx-6 mt-8 w-[360px]">
          <h4 class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[600]" v-html="text"></h4>
        </div>

        <!-- AUTHOR -->
        <div class="mx-6">
          <p class="text-right text-body-text-color font-poppins text-[14px] text-[#2A3338] tablet:text-[10px] font-[500]" v-html="author"></p>
        </div>
        

      </div>


    </div>

  </div>

  <!-- 
  <div v-if="smallScreen" class="w-full">
    <div class="flex justify-between items-center w-full gap-[15px]">
      <div class="w-1/12">
        <div
          class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center">
          <img :src="path+icon" alt="icon" class="w-[90%] h-[90%]" />
        </div>
      </div>
      <div class="w-10/12 flex justify-end">
        <h4 class="text-left text-body-text-color font-poppins max-w-[95%] text-[16px] font-[400]" v-html="text"></h4>
      </div>

    </div>
  </div>
  -->

</template>
