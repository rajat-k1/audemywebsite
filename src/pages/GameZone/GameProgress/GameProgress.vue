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

            <div>
                <div>{{ languageGames }}</div>
            </div>
            
            <!-- Games -->
            <div class="flex flex-row items-center w-full">
                <!-- Arrow Swipe Left -->
                <div class="flex justify-center w-1/6">
                    <button class="text-4xl h-full">
                        <img src="/assets/gameImages/buttons/arrow-slide-back.svg" class="h-12 hover:bg-gray-300"/>
                    </button>
                </div>
                <!-- Horizontal Game List -->
                <div class="flex overflow-auto gap-16 w-4/6 p-2">
                    
                    <div>
                        <img src="/assets/myProgress/stage2.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage1.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage2.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage3.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage1.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage3.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage2.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                    <div>
                        <img src="/assets/myProgress/stage1.svg" class="object-fill"/>
                        <div>GameName</div>
                        <div>Level</div>
                    </div>
                </div>
                <!-- Arrow Swipe Right -->
                <div class="flex justify-center w-1/6">
                    <button>
                        <img src="/assets/gameImages/buttons/arrow-slide-forward.svg" class="h-12 hover:bg-gray-300"/>
                    </button>
                </div>
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
import { getLanguageGames, getMathGames } from "../GameDB.js";

let languageGames = ref();
languageGames = getLanguageGames();

for (let i = 0; i < languageGames.length; i++) {
    console.log(languageGames[i].title);
}

export default {
  setup() {
    const userName = ref("[Name]");
    return { userName };
  }
};
</script>
