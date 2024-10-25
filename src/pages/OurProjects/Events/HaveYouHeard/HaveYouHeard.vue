<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import HaveYouHeardCard from "./HaveYouHeardCard/HaveYouHeardCard.vue";

  const items = [
    {
      icon: 'school.svg',
      text: 'Sessions at schools for the blind to introduce our games to students.'
    },
    {
      icon: 'classroom.svg',
      text: 'Workshops for BVI individuals on accessing coding resources.'
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

  <div class="flex w-full pl-40 pr-20 my-40 relative">
        <!-- LEFT PORTION -->
        <div class="flex flex-col items-start justify-start mobile:justify-center w-1/2 h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
          
          <div>
            <h3 class="font-poppins text-small-text-color text-[#6e777c] text-[12px] font-[600] mobile:w-auto text-left tracking-[3.6px]">EDUCATIONAL EVENTS</h3>
          </div>
          
          <div class="max-w-[519px]">
            <h2 class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]">Have you heard about the events we organize?</h2>
          </div>
          
          <div class="flex justify-center">
            <div class="max-w-[744px] w-full">
              <div id="div_about_us" class="flex flex-col justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:gap-4">
                
                <HaveYouHeardCard v-for="item in items" :icon="item.icon" :text="item.text" :smallScreen="smallScreen" />
                
              </div>
            </div>
          </div>
      
          <!-- Div for Instagram Button -->
          <div class="flex items-center justify-center">
            <a href="https://www.instagram.com/audemyapp/"
              target="_blank"
              class=" font-poppins font-semibold px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300  text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] ">
              Follow us on Instagram
            </a>
          </div>
        </div>

        <!-- RIGHT PORTION -->
        <div class="w-1/2">
          <!-- Background -->
          <img src="/src/assets/images/our-projects/Mask group.png" class="absolute w-[40%] -top-48 right-0 -z-10" />
          <!-- Image of students w/ Crystal -->
          <img src="/src/assets/images/our-projects/events1.svg" alt="Image of students" class="relative -top-20 right-28 z-10 object-contain w-full h-max" />
        </div>

    
  </div>

</template>

<style scoped>
@media screen and (max-width: 450px) {
  #div_about_us {
    flex-wrap: wrap;
  }
}

  .scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
</style>