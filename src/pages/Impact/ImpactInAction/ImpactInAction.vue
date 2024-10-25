<script setup>
  import Carousel from "./Carousel.vue";  
</script>

<template>

  <div class="flex w-full mb-[28rem]">
    
    <!-- CAROUSEL COMPONENT -->
      <div class="relative w-1/2">
        <img src="/src/assets/images/impact/Union.png" class="max-w[100px]" />
        <img src="/src/assets/images/impact/Group 1135.png" class="absolute right-[16rem] top-[5rem] z-20" />
        <img src="/src/assets/images/impact/Group 1153.png" class="absolute left-40 top-8 z-20" />

        
        <!-- Tablet w/ Carousel -->
        <!--
        <img src="/src/assets/images/impact/Group 1182.png" class="absolute left-52 top-28 ml-10" />
        -->
        <div>
          <img src="/src/assets/images/impact/carousel/tablet.svg" class="absolute top-[5rem] left-[5.22rem] w-[639px] h-[462px]" />
          <Carousel />
        </div>
        
      </div>

    <!-- TEXT -->
    <div class="mt-[12rem]">
      <div class="mb-4">
        <h3 class="font-poppins text-small text-[#6E777C] font-semibold text-[12px] font-[500] mobile:w-auto text-left tracking-[3.6px]">GALLERY</h3>
      </div>

      <div class="max-w-[509px]">
        <h2 class="text-left font-poppins text-[#151e22] text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-8">Our impact in action</h2>
        <p class="text-body text-xl font-poppins leading-8">
          Want to see Audemy in action? Swipe through this collection of images that showcase not only our achievements, 
          but the lives we've touched and the impact we strive to make every day.
        </p>
      </div>
      
    </div>
    
  </div>
</template>