<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: String,
    title: String,
    description: String,
    url: String,
    textColor: String,
    bgColor: String,
    bgDecoration: Boolean,
});
</script>

<template>
    <div
        @click="$emit('selectGame', url)"
        class="w-full h-[320px] mobile:h-[160px] rounded-[16px] border-[2px] border-[#323232] shadow-[4px_4px_0px_#323232] p-5 relative flex justify-center items-center"
        :style="{ backgroundColor: bgColor, color: textColor ?? '#323232' }"
    >
        <img
            :src="icon"
            alt="Game icon"
            class="w-[100px] h-[100px] mobile:w-[40px] mobile:h-[40px] absolute top-4 right-5 mobile:top-5 mobile:right-1 z-20"
        />
        <img
            v-if="bgDecoration"
            src="/assets/gameImages/bg-decoration.svg"
            alt="Game icon"
            class="h-full absolute top-0 right-0"
        />
        <div class="w-full absolute bottom-0 left-0 p-4 z-50">
            <div class="w-full" :class="{ 'mb-5': description }">
                <h3
                    id="title"
                    class="font-poppins text-[50px] tablet:text-[40px] mobile:text-[20px] text-wrap font-semibold"
                >
                    {{ title }}
                </h3>
            </div>
            <h3
                v-if="description"
                id="description"
                class="font-poppins text-[24px] mobile:text-[12px] tablet:text-[20px]"
                :class="!bgDecoration ? 'text-[#6E777C]' : ''"
            >
                {{ description }}
            </h3>
        </div>
    </div>
</template>
<style>
@media (max-width: 1020px) and (min-width: 768px) {
    #title {
        font-size: 40px;
    }

    #description {
        display: none;
    }
}
</style>
