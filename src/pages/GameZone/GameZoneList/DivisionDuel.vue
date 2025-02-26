<template>
    <div class="min-h-screen font-poppins" :class="[isTablet || isMobile ? 'bg-[#E9F8FF]' : 'bg-[#6FFFC6]']">
        <!-- Header -->
        <div class="w-full">
            <GamePagesHeader />
        </div>

      <!--div class="flex mt-2 mb-2 w-1/2">
          <button onclick="history.back()">
              <img
                  src="/assets/gameImages/buttons/arrow-back.svg"
                  class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                  alt="Back Button Image"
              />
          </button>
      </div-->

      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div v-if="!isTablet && !isMobile" class="absolute top-20 right-60 w-32 h-32">
            <svg viewBox="0 0 100 100" class="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#FFD137" />
            </svg>
        </div>
        <!-- Clouds - Different for tablet -->
        <template v-if="isTablet">
            <!-- Left cloud for tablet -->
            <div class="absolute left-0 z-0" style="bottom: 150px;">
            <img
                src="/assets/gameImages/cloud-bg-Tab-left.png"
                alt="Decorative cloud"
                style="width: 300px; height: auto;"
            />
            <!-- Paper plane above left cloud -->
            <div class="absolute" style="width: 82px; height: 82px; top: -350px; left: 50.05px;">
                <img
                src="/assets/gameImages/paperPlane.png"
                alt="Paper plane"
                style="width: 100%; height: 100%;"
                />
            </div>
            </div>
            <!-- Right cloud for tablet -->
            <div class="absolute bottom-0 right-0 z-0" style="bottom: 50px;">
            <img
                src="/assets/gameImages/cloud-bg-Tab-right.png"
                alt="Decorative cloud"
                style="width: 300px; height: auto;"
            />
            </div>
        </template>
        <!-- Clouds for desktop -->
        <template v-else-if="!isMobile">
            <div class="absolute bottom-0 left-0 z-0" style="bottom: 50px;">
            <img
                src="/assets/gameImages/cloud-bg.png"
                alt="Decorative cloud"
                style="width: 400px; height: auto;"
            />
            </div>
        </template>
        <!-- Mobile-specific clouds -->
        <template v-if="isMobile">
            <!-- Only right cloud for mobile -->
            <div class="absolute right-0 z-0" style="bottom: 20px;">
            <img
                src="/assets/gameImages/cloud-bg-Tab-right.png"
                alt="Decorative cloud"
                style="width: 250px;"
            />
            </div>
        </template>
        </div>

        <!-- Main Content -->
        <div class="flex flex-col justify-center items-center relative z-10" :class="[isMobile ? 'h-[calc(90vh-144px)]' : 'h-[calc(90vh-64px)]']">
            <div class="flex flex-col justify-center items-center mb-8">
                <!-- Game icon and title - now stacked on top of everything -->
                <div class="flex flex-col items-center">
                <div class="mb-2">
                    <img
                    src="/assets/gameImages/buttons/gameButtons/div.svg"
                    alt="Game icon"
                    class="w-[70px] h-[70px]">
                </div>
                <h1
                    :class="[
                    isMobile ? 'text-[56px] leading-[60px]' : 'text-[64px] leading-[70px]'
                    ]"
                    class="font-poppins font-semibold tracking-normal text-center mb-6"
                >
                Division Duel
                </h1>
            </div>
          <div v-if="playButton === false">
                <button
                    @click="playButton = true"
                    class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
                >
                    &nbsp;Play&nbsp;
                </button>
            </div>
            <div
                v-else-if="
                    numOfAudiosPlayed < allQuestionslength &&
                    playButton === true
                "
                class="flex flex-col p-4 justify-center"
                id="content"
            >
                <!-- Different button styling for tablet -->
           <div :class="[
             isTablet ? 'flex gap-[25px] mb-6' :
             isMobile ? 'flex flex-col gap-4 mb-6' :
             'flex gap-6 mb-6'
           ]">
             <!-- Record Answer Button -->
             <button
               :class="[
                 'flex items-center justify-center shadow-md',
                 isTablet ?
                   'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]' :
                 isMobile ?
                   'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]' :
                   'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
                 isListening ? 'bg-red-500' : 'bg-[#087BB4]',
                 'text-white'
               ]"
               style="box-shadow: 10px 10px 20px 0px #32323233;"
             >
               <span class="text-lg font-medium">{{ isTablet || isMobile ? 'Record' : 'Record Answer' }}</span>
               <img
                 src="/assets/gameImages/buttons/mic.png"
                 class="w-6 h-6"
                 alt="Record Icon"
               />
             </button>
             
             <!-- Repeat Question Button -->
             <button
               @click="repeatQuestion"
               :class="[
                 'flex items-center justify-center shadow-md',
                 isTablet ?
                   'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]' :
                 isMobile ?
                   'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]' :
                   'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
                 'bg-white border border-[#0096D6] text-[#0096D6]'
               ]"
               style="box-shadow: 10px 10px 20px 0px #32323233;"
             >
               <span class="text-lg font-medium">{{ isTablet || isMobile ? 'Repeat' : 'Repeat Question' }}</span>
               <img
                 src="/assets/gameImages/buttons/repeat.png"
                 class="w-6 h-6"
                 alt="Repeat Icon"
               />
             </button>
           </div>
           
           <div
             id="transcript"
             class="text-center text-xl font-bold pt-2 pb-1"
           >
             You said: {{ transcription }}
           </div>
         </div>
         
         <!-- Game over section -->
         <div v-else>
           <div class="text-center text-3xl font-bold pt-2 pb-1">
             Game Over
           </div>
           <div class="text-center text-xl font-medium pt-2 pb-1">
            Score: {{ score }} / {{ allQuestionslength }}
           </div>
         </div>
       </div>
     </div>
   </div>
   </template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import GamePagesHeader from '../../Header/GamePagesHeader.vue';
import { requestMicPermission } from "../../../Utilities/requestMicAccess";
import {
    playIntro,
    playQuestion,
    playSound,
    stopAudios,
    playScore,
} from "../../../Utilities/playAudio";
import {
    startListening,
    stopListening,
} from "../../../Utilities/speechRecognition";

// Device detection
const isTablet = ref(false);
const isMobile = ref(false);
   
// Check device type on mount and on window resize
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width < 1024) {
    // Medium devices (tablets)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width >= 1024) {
    // Large devices (laptops/desktops)
    isTablet.value = false;
    isMobile.value = false;
  } else {
    // Extra small devices (phones)
    isTablet.value = false;
    isMobile.value = true;
  }
};

const currentAudios = [],
    randQueNum = [];
let numOfAudiosPlayed = ref(0),
    score = ref(0);
let questionsDb = [],
    isListening = ref(false),
    transcription = ref(""),
    playButton = ref(false),
    isIntroPlaying = ref(false);

let allQuestionslength = 0;

// Generate multiplication questions using Json file
const generateQuestions = () => {
    console.log("Generating Questions...");
    fetch("/assets/questionsDb/divisionDb.json")
        .then((response) => response.json())
        .then((data) => {
            let allQuestions = [
                ...data["DivisionGame"]["Questions"]["Easy"],
                ...data["DivisionGame"]["Questions"]["Medium"],
                ...data["DivisionGame"]["Questions"]["Hard"],
            ];
            allQuestionslength = allQuestions.length;
            while (randQueNum.length < allQuestionslength) {
                let num = Math.floor(Math.random() * allQuestions.length);
                if (!randQueNum.includes(num)) {
                    randQueNum.push(num);
                }
            }

            questionsDb = allQuestions;
            console.log("Questions generated!");
            console.log(questionsDb);
        })
        .catch((error) => {
            console.error("Error fetching questions:", error);
        });
};

// Play the next question
const playNextQuestion = () => {
    if (numOfAudiosPlayed.value < allQuestionslength) {
        const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
        console.log(question);
        currentAudios.push(playQuestion(question["Q"]));
    }
};

// Handle the spacebar events
const handleKeyDown = (event) => {
    if (event.code === "KeyR" && 
        numOfAudiosPlayed.value < allQuestionslength && 
        !isIntroPlaying.value) {
        playNextQuestion();
        return;
    }

    if (
        event.code === "Space" &&
        !isListening.value &&
        numOfAudiosPlayed.value < allQuestionslength &&
        !isIntroPlaying.value
    ) {
        isListening.value = true;
        startListening((transcript) => {
            const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
            console.log("Question is: ", question["Q"]);
            console.log("User Answer:", transcript);
            console.log("Correct Answer:", question["A"]);
            transcription.value = transcript;
            const answers = question["A"].map((ans) => ans.toLowerCase());
            if (answers.includes(transcript.trim().toLowerCase())) {
                score.value++;
                console.log("Correct Answer!");
                playSound("correctaudio.mp3");
            } else {
                console.log("Wrong Answer!");
                playSound("incorrectaudio.mp3");
            }
            stopListening();
            isListening.value = false;
            numOfAudiosPlayed.value++;
            if (numOfAudiosPlayed.value < allQuestionslength) {
                setTimeout(() => {
                    playNextQuestion();
                }, 2000);
            } else {
                console.log("Game Over!");
                setTimeout(() => {
                    playScore(score.value);
                }, 2000);
            }
        });
    }
};

// Stop listening on keyup
const handleKeyUp = async (event) => {
    if (event.code === "Space" && isListening.value) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        stopListening();
        isListening.value = false;
    }
};

onMounted(() => {
    // Request microphone access on page load
    console.log("Requesting microphone access...");
    requestMicPermission();

    // Check device type initially and set up listener for window resize
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    // Generate questions
    generateQuestions();

    watch(playButton, (newVal) => {
        if (newVal) {
            isIntroPlaying.value = true;
            const introAudio = playIntro("/divisionduel/divintro.mp3");
            currentAudios.push(introAudio);
            introAudio.onended = () => {
                isIntroPlaying.value = false;
                playNextQuestion();
            };
        }
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
    console.log("Navigated Back!");
    stopAudios(currentAudios);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    window.removeEventListener('resize', checkDeviceType);
});
</script>
