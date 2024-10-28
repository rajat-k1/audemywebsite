<script setup>
import Group1010 from "../../assets/images/SignUpImg/Group 1010.png";
import Group878 from "../../assets/images/SignUpImg/Group 878.png";
import OrangeStar from "../../assets/images/SignUpImg/Group 895.png";
import Book from "../../assets/images/SignUpImg/Group 1106.png";
import Star from "../../assets/images/testimonials/star.svg";

</script>
<template>
  <div class="w-full h-screen overflow-hidden flex justify-between gap-[98px] font-poppins ">

    <!-- SIDE IMAGE -->
    
    <div class="w-5/12 p-0 bg-[#E5F0F5] relative">
      
      <p class="font-bold text-[16px] text-[#151E22] mt-[45px] ml-20">audemy</p>
      
      <img :src=OrangeStar class="w-[66px] absolute left-[359px] top-[110px] z-10" alt="">
      <img :src=Star class="w-[69px] absolute left-[89px] top-[310px] z-10" alt="">
      <img :src=Book class="w-[66px] absolute left-[580px] top-[430px] z-10" alt="">
      <img :src=Group878 class="absolute bottom-[-350px] w-[full]" alt="">
      <img :src=Group1010 class="absolute bottom-[60px] w-[60%] left-[50%] translate-x-[-50%]" alt="">
    </div>
    
    <div class="w-7/12 pt-[62px] pb-[162px]">
      
      <h1 class="text-[40px] text-[#151E22] max-w-[504px]">Sign up to get started!</h1>

      <!-- FORM FIELD -->
      <form action="#" class="mt-[62px] max-w-[488px]">

        <!-- FIRST & LAST NAME -->
        <div class="flex items-center justify-between mb-[16px]">
          
            <div class="w-[221px] mr-[36px]"> 
              <label class="block text-[#0C0D0D] font-semiBold" for="firstName">First Name</label>
              <input type="text"
                class="outline-none border border-black h-[48px] px-4 rounded-[8px]"
                id="firstName" name="firstName" placeholder="Enter your first name">
            </div>
          
            <div class="w-[221px]">
              <label class="block text-[#0C0D0D] font-semiBold" for="lastName">Last Name</label>
              <input type="text"
                class="outline-none border border-black h-[48px] px-4 rounded-[8px]"
                id="lastName" name="lastName" placeholder="Enter your last name">
            </div>
          
        </div>

        <!-- DOB FIELD -->
        <div class=" mb-[16px]">
          <label class="block text-[#0C0D0D] font-semiBold">Date of Birth</label>
          <input type="text"
            class="mr-[11px] w-[129px] outline-none border border-black h-[48px] px-4 rounded-[8px]"
            name="day" placeholder="1">
          <input type="text"
            class="mr-[11px] w-[205px] outline-none border border-black h-[48px] px-4 rounded-[8px]"
            name="month" placeholder="January">
          <input type="text"
            class="w-[129px] outline-none border border-black h-[48px] px-4 rounded-[8px]"
            name="year" placeholder="2010">
        </div>
        
        <!-- SCHOOL FIELD -->
        <div class="mb-[16px]">
          <label for="school" class="block text-[#0C0D0D] font-semiBold">School</label>
          <input type="text"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="school" name="school" placeholder="Enter your school's name">
        </div>

        <!-- EMAIL FIELD -->
        <div class="mb-[16px]">
          <label class="block text-[#0C0D0D] font-semiBold" for="email">Email</label>
          <input type="email"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="email" name="email" placeholder="Enter your email address">
        </div>

        <!-- PASSWORD FIELD -->
        <div class="mb-[16px]">
          <label for="password" class="block text-[#0C0D0D] font-semiBold">Password</label>
          <input type="password"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="password" name="password" placeholder="Create your best password">
        </div>

        <!-- CONFIRM PASSWORD FIELD -->
        <div class="mb-[16px]">
          <label for="confirm-password" class="block text-[#0C0D0D] font-semiBold">Confirm Password</label>
          <input type="password"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="confirm-password" name="confirm-password" placeholder="Confirm your password">
        </div>
        
        <p class="font-semiBold text-[16px] text-[#0C0D0D]">Already have an Audemy account? <a href="login"
          class="text-[#087BB4]  hover:text-[#0C587D] ">Log in</a></p>

        <!-- GET STARTED BTN -->
        <div class="mt-[24px] mb-[30px]">
          
          <input type="submit"
            class="w-[488px] h-[56px] text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semiBold shadow-[4px_4px_0px_black]"
            value="Get Started">
          
        </div>
        
      </form>
    </div>

    
    
  </div>
</template>