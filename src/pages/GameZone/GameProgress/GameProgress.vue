<template>
    <div class="flex flex-col gap-8 items-center py-4">
        <!-- User Greeting -->
        <div class="text-[30px]">
            {{ userName }}, unlock new levels with Carl!
        </div>

        <!-- Language lab Journey -->
        <div class="flex flex-col border-2 items-center border-black rounded-xl w-3/4 py-10">
            <!-- Title -->
            <div class="text-[25px]">
                My Language Lab Journey
            </div>
            
            <!-- Games -->
            <div class="flex flex-row items-center w-full">
                <!-- Arrow Swipe Left -->
                <div class="flex justify-center w-1/6">
                    <button>
                        <img src="/assets/gameImages/buttons/arrow-slide-back.svg" class="h-14"/>
                    </button>
                </div>
                <!-- Horizontal Game List -->
                <div class="flex flex-row overflow-auto gap-16 w-4/6 p-2">
                    <div v-for="game in languageGames" class="basis-1/4 flex-none">
                        <div><img src="/assets/myProgress/stage1.svg" class="object-fill"/></div>
                        <div class="flex justify-center pt-2">{{ game.title }}</div>
                        <div class="flex justify-center text-gray-500">Level</div>
                    </div>
                </div>
                <!-- Arrow Swipe Right -->
                <div class="flex justify-center w-1/6">
                    <button>
                        <img src="/assets/gameImages/buttons/arrow-slide-forward.svg" class="h-14"/>
                    </button>
                </div>
            </div>

            <!-- Progress Status -->
            <div class="flex flex-row gap-12 px-20 pt-10 items-center w-full">
                <!-- Percentage -->
                <div class="w-1/4">
                    <div>25% achieved </div>
                    <div class="text-gray-500 text-xs">5 more levels to unlock</div>
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
            <div class="flex flex-row items-center w-full">
                <!-- Arrow Swipe Left -->
                <div class="flex justify-center w-1/6">
                    <button>
                        <img src="/assets/gameImages/buttons/arrow-slide-back.svg" class="h-14"/>
                    </button>
                </div>
                <!-- Horizontal Game List -->
                <div class="flex flex-row overflow-auto gap-16 w-4/6 p-2">
                    <div v-for="game in mathGames" class="basis-1/4 flex-none">
                        <div><img src="/assets/myProgress/stage2.svg" class="object-fill"/></div>
                        <div class="flex justify-center pt-2">{{ game.title }}</div>
                        <div class="flex justify-center text-gray-500">Level</div>
                    </div>
                </div>
                <!-- Arrow Swipe Right -->
                <div class="flex justify-center w-1/6">
                    <button>
                        <img src="/assets/gameImages/buttons/arrow-slide-forward.svg" class="h-14"/>
                    </button>
                </div>
            </div>

            <!-- Progress Status -->
            <div class="flex flex-row gap-12 px-20 items-center w-full">
                <!-- Percentage -->
                <div class="w-1/4">
                    <div>55% achieved </div>
                    <div class="text-gray-500 text-xs">5 more levels to unlock</div>
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
import { getLanguageGames, getMathGames } from "../GameDB.js";

export default {
  setup() {
    const userName = ref("[Name]");
    let languageGames = ref(getLanguageGames());
    let mathGames = ref(getMathGames());
    return { userName, languageGames, mathGames };
  }
};
</script>
