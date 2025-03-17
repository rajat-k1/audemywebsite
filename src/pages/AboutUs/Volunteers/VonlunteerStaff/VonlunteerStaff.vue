<script setup>
import { defineProps, inject } from "vue";

const props = defineProps({
  staffTitle: String,
  staff: Array,
});

// Inject the responsive flags from parent component
const isTablet = inject('isTablet', false);
const isMobile = inject('isMobile', false);
</script>

<template>
  <div>
    <!-- Staff Title Section -->
    <div class="mb-6">
      <h3
        class="font-poppins text-2xl tablet:text-[28px] mobile:text-[24px] font-[400]"
      >
        {{ staffTitle }}
      </h3>
    </div>

    <!-- Staff Grid Section -->
    <div class="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-x-6 gap-y-10">
      <!-- Each volunteer card is a self-contained unit -->
      <div
        v-for="volunteer in staff"
        :key="volunteer.name"
        class="flex flex-col items-center"
      >
        <!-- Volunteer Image -->
        <div class="mb-4">
          <img
            :src="volunteer.image"
            :alt="volunteer.name"
            class="w-[140px] h-[140px] tablet:w-[120px] tablet:h-[120px] desktop:w-[160px] desktop:h-[160px] rounded-full"
          />
        </div>
        
        <!-- Volunteer Info - always below the image -->
        <div class="text-center">
          <h3 class="font-poppins text-[20px] font-bold mb-1">
            {{ volunteer.name }}
          </h3>
          <h4 class="font-poppins text-[16px]">
            {{ volunteer.role }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>