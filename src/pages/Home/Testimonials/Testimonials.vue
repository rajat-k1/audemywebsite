<script setup>
import Comment from "../../../assets/images/testimonials/comment.png";
import Star from "../../../assets/images/testimonials/star.svg";
</script>

<template>
  <div
    class="flex flex-col items-center gap-y-12 self-center mt-20 pt-80 pb-[18rem] px-20 mobile:px-5 relative z-10 "
    >

    <img src="/src/assets/images/testimonials/testimonials-bg.png" class="absolute top-[4rem] -z-10 h-[60rem] fill" />
    

    <div class="font-poppins flex flex-col gap-y-3">
      
      
      
      <h1 class="text-4.5xl text-center text-title">What people are saying</h1>
      <p class="text-body text-xl ">Our learners are our top priority, and we strive to make their
        experience unique and enriching.</p>
      
    </div>

    <div class="grid grid-cols-3 gap-x-20">
      
      <div class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 px-8 rounded-lg ">
        
        <img src="/src/assets/images/testimonials/yellowStar2.svg" alt="Yellow star" class="absolute top-[-2.5rem] left-[0rem] z-10 pulse" />
        
        <div class="max-w-52 w-full flex flex-col gap-y-4 font-poppins">
          <p class="">“The blind students who played the games were very into it!”</p>
          <h4 class='text-small'>&mdash; Teacher from the Texas School for the Blind and Visually Impaired
          </h4>
          
        </div>
        
      </div>

      
      <div class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 px-8 rounded-lg ">

        <img src="/src/assets/images/testimonials/chatBalloon.svg" alt="Chat balloon" class="absolute top-[2rem] right-[-2rem] z-10 pulse" />
        
        <div class="max-w-52 w-full flex flex-col gap-y-4 font-poppins">
          <p class="">“Audemy’s games provide accessible and engaging educational content for our blind students.”</p>
          <h4 class='text-small'>&mdash; Staff from Kansas School for the Blind
          </h4>
        </div>
      </div>

      
      <div class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 px-8 rounded-lg ">

        <img src="/src/assets/images/testimonials/orangeStar.svg" alt="Yellow star" class="absolute bottom-[-2.5rem] right-[1rem] z-10 pulse" />
        
        <div class="max-w-52 w-full flex flex-col gap-y-4 font-poppins">
          <p class="">“Audemy’s audio games are unique...my favorite game was car counting because I love cars and
            math.”
          </p>
          <h4 class='text-small'>&mdash; Blind Student from Houston
          </h4>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

.pulse {
  animation: pulse 1.1s infinite;
}

  @keyframes pulse {
      0% {
          transform: scale(1);
      }

      50% {
          transform: scale(1.3);
      }

      100% {
          transform: scale(1);
      }
  }

  .fill {
    width: -webkit-fill-available;
  }

  
</style>