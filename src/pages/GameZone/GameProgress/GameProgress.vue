<template>
    <div class="flex flex-col gap-8 items-center py-4">
        <!-- User Greeting -->
        <div class="text-[30px]">
            {{ userName }}, unlock new levels with Carl!
        </div>

        <!-- Language lab Journey -->
        <div class="flex flex-col gap-8 border-2 items-center border-black rounded-xl w-3/4 py-10">
            <!-- Title -->
            <div class="text-[25px]">
                My Language Lab Journey
            </div>
            
            <!-- Games -->
            <div>
                <img src="/public/assets/gameImages/buttons/gameButtons/multiplicationMadness.svg" />
            </div>

            <!-- Progress Status -->
            <div class="flex flex-row gap-12 px-20 items-center w-full">
                <!-- Percentage -->
                <div class="w-1/4">
                    <div>25% achieved </div>
                    <div>5 more levels to unlock</div>
                </div>
                <!-- Progress Bar -->
                <div class="w-3/4 bg-[#a999dd] rounded-xl h-3">
                    <div class="bg-[#725AC0] h-3 rounded-xl" style="width: 25%"></div>
                </div>
            </div>
        </div>

        <!-- Math Magic Journey -->
        <div class="flex flex-col gap-8 border-2 items-center border-black rounded-xl w-3/4 py-10">
            <!-- Title -->
            <div class="text-[25px]">
                My Math Magic Journey
            </div>
            
            <!-- Games -->
            <div>
                <img src="/public/assets/gameImages/buttons/gameButtons/animalAddition.svg" />
            </div>

            <!-- Progress Status -->
            <div class="flex flex-row gap-12 px-20 items-center w-full">
                <!-- Percentage -->
                <div class="w-1/4">
                    <div>55% achieved </div>
                    <div>5 more levels to unlock</div>
                </div>
                <!-- Progress Bar -->
                <div class="w-3/4 bg-[#79e2e2] rounded-xl h-3">
                    <div class="bg-[#28afb0] h-3 rounded-xl" style="width: 55%"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import GameZoneCard from '../GameZoneCard/GameZoneCard.vue';
import { getLanguageGames, getMathGames } from "../GameDB.js";
import SampleImage from '../../../../public/assets/gameImages/buttons/gameButtons/multiplicationMadness.svg';


const games = ref([]);
const getGames = (type) => {
    games.value = getLanguageGames();
    console.log(games.value);
};

export default {
  setup() {
    const userName = ref("[Name]");
    return { userName };
  }
};
</script>
