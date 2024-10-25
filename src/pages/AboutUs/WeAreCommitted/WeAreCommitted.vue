<script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import WeAreCommittedCard from "./WeAreCommittedCard.vue";

  const items = [
    {
      icon: 'bulb2.svg',
      text: 'Invest funding in the latest technologies and resources'
    },
    {
      icon: 'ai.svg',
      text: 'Use AI tools to tailor games for blind children\'s needs'
    },
    {
      icon: 'globe.svg',
      text: 'Make our games available to a wider audience'
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

  <div class="flex w-full pl-40 pr-20 mt-40 relative">
        <!-- LEFT PORTION -->
        <div class="flex flex-col items-start justify-start mobile:justify-center w-2/5 h-auto mb-[6rem] tablet:mb-[265px] mobile:mb-[129px]">
          
          <div>
            <h3 class="font-poppins text-small-text-color text-[#6e777c] text-[12px] font-[600] mobile:w-auto text-left tracking-[3.6px]">GROWTH & FUTURE HORIZONS</h3>
          </div>
          
          <div class="max-w-[430px]">
            <h2 class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]">We are committed to do much more</h2>
          </div>
          
          <div class="flex justify-center">
            <div class="max-w-[744px] w-full">
              <div id="div_about_us" class="flex flex-col justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:gap-4">
                
                <WeAreCommittedCard v-for="item in items" :icon="item.icon" :text="item.text" :smallScreen="smallScreen" />
                
              </div>
            </div>
          </div>
      
        </div>

    <!-- RIGHT PORTION -->
    <div class="relative w-3/5">
      <!-- Background -->
      <img src="/src/assets/images/our-projects/Mask group.png" class="absolute w-[90%] object-cover -top-48 -right-40 -z-10" />
      <!-- Image of students w/ Crystal -->
      <img src="/src/assets/images/about-us/childPlaying-tablet.png" alt="Image of student" class="absolute top-[4rem] right-40 z-10 object-contain w-[580px] h-max" />

      <!-- Star graphics -->
      <img src="/src/assets/images/about-us/yellowStar.svg" alt="Yellow Star" class="absolute -top-[3rem] right-[15rem] z-10" />
      <img src="/src/assets/images/impact/orangeStar.png" alt="Orange Star" class="absolute bottom-[10rem] left-[7rem] z-10" />
      <img src="/src/assets/images/about-us/blueStar2.svg" alt="Blue Star" class="absolute w-[81px] bottom-[5rem] right-[5rem] z-10" />
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