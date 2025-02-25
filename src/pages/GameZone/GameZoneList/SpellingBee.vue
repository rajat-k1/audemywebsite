<template>
    <div class="min-h-screen font-poppins bg-[#FAE9B6]">
       <!-- Header -->
       <div>
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
         <!-- Sun -->
         <div class="absolute top-20 right-60 w-32 h-32">
           <svg viewBox="0 0 100 100" class="w-full h-full">
             <circle cx="50" cy="50" r="50" fill="#FFD137" />
           </svg>
         </div>
         
         <!-- Clouds - Positioned to avoid overlapping buttons -->
         <div class="absolute bottom-0 left-0 z-0" style="bottom: 50px;">
           <img
             src="/assets/gameImages/cloud-bg.png"
             alt="Decorative cloud"
             style="width: 400px; height: auto;"
           />
         </div>
       </div>
       
       <!-- Game Content -->
       <div class="flex flex-col justify-center items-center h-[calc(90vh-64px)] relative z-10">
         <div class="mt-0">
           <img 
             src="/assets/gameImages/buttons/gameButtons/spellingBee.svg"
             alt="Game icon"
             class="w-[100px] h-[100px]">
         </div>
         
         <div class="flex flex-col justify-center items-center">
           <div class="text-center">
            <h1 class="w-[397px] h-[70px] font-poppins font-semibold text-[64px] leading-[70px] tracking-normal">Spelling Bee</h1>
            <p class="w-[397px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-center mt-2 mb-8">Buzz your way to spelling mastery!</p>
          </div>
           
           <div v-if="playButton === false">
             <button
               @click="playButton = true"
               class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
             >
               Play
             </button>
           </div>
           
           <div
             v-else-if="numOfAudiosPlayed < 5 && playButton === true"
             class="flex flex-col p-4 justify-center items-center"
             id="content"
           >
             
             <div class="flex gap-6 mb-6"> <!-- Changed gap from 4 to 6 (24px) -->
               <!-- Record Answer Button - Updated dimensions and styling -->
               <button
                 class="flex items-center justify-center gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px] shadow-md bg-[#087BB4] text-white"
                 style="box-shadow: 10px 10px 20px 0px #32323233;"
                 :class="isRecording ? 'bg-red-500' : ''"
               >
                 <span class="text-lg font-medium">Record Answer</span>
                 <img
                   src="/assets/gameImages/buttons/mic.png"
                   class="w-6 h-6"
                   alt="Record Icon"
                 />
               </button>
               
               <!-- Repeat Question Button - Updated dimensions and styling -->
               <button
                 class="flex items-center justify-center gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px] bg-white border border-[#0096D6] text-[#0096D6] shadow-md"
                 style="box-shadow: 10px 10px 20px 0px #32323233;"
               >
                 <span class="text-lg font-medium">Repeat Question</span>
                 <img
                   src="/assets/gameImages/buttons/repeat.png"
                   class="w-6 h-6"
                   alt="Repeat Icon"
                 />
               </button>
             </div>
             
             <!-- div
               id="transcript"
               class="text-center text-xl font-bold pt-2 pb-1"
             >
               You said: {{ transcription }}
             </div-->
           </div>
           
           <div v-else>
             <div class="text-center text-3xl font-bold pt-2 pb-1">
               Game Over
             </div>
             <div class="text-center text-xl font-medium pt-2 pb-1">
               Score: {{ score }} / 5
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
   
   const currentAudios = [],
     randQueNum = [];
   let numOfAudiosPlayed = ref(0),
     score = ref(0);
   let questionsDb = [],
     isListening = ref(false),
     transcription = ref(""),
     playButton = ref(false),
     isIntroPlaying = ref(false),
     isRecording = ref(false);
   
   // Generate multiplication questions using Json file
   const generateQuestions = () => {
     console.log("Generating Questions...");
     // Generate 5 random numbers for the questions
     while (randQueNum.length < 5) {
       let num = Math.floor(Math.random() * 15);
       if (!randQueNum.includes(num)) {
         randQueNum.push(num);
       }
     }
     // Fetch questions from JSON file
     fetch("/assets/questionsDb/spellingBeeDB.json")
       .then((response) => response.json())
       .then((data) => {
         console.log(
           "Questions:",
           data["SpellingBeeGame"]["Questions"]["Easy"]
         );
         // Process the questions data as needed
         questionsDb = data["SpellingBeeGame"]["Questions"]["Easy"];
       })
       .catch((error) => {
         console.error("Error fetching questions:", error);
       });
   };
   
   // Play the next question
   const playNextQuestion = () => {
     if (numOfAudiosPlayed.value < 5) {
       const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
       console.log(question);
       currentAudios.push(playQuestion(question["Q"]));
     }
   };
   
   // Handle the spacebar events
   const handleKeyDown = (event) => {
     if (event.code === "KeyR" &&
       numOfAudiosPlayed.value < 5 &&
       !isIntroPlaying.value) {
       const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
       playQuestion(question["Q"]);
       return;
     }
     if (
       event.code === "Space" &&
       !isListening.value &&
       numOfAudiosPlayed.value < 5 &&
       !isIntroPlaying.value
     ) {
       isListening.value = true;
       isRecording.value = true;
       startListening((transcript) => {
         const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
         console.log("Question is: ", question["Q"]);
         console.log("User Answer:", transcript);
         console.log("Correct Answer:", question["A"]);
         transcription.value = transcript;
         if (transcript.trim().toLowerCase() === question["A"].toLowerCase()) {
           score.value++;
           console.log("Correct Answer!");
           playSound("correctaudio.mp3");
         } else {
           console.log("Wrong Answer!");
           playSound("incorrectaudio.mp3");
         }
         stopListening();
         isListening.value = false;
         isRecording.value = false;
         numOfAudiosPlayed.value++;
         if (numOfAudiosPlayed.value < 5) {
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
       isRecording.value = false;
     }
   };
   
   onMounted(() => {
     // Request microphone access on page load
     console.log("Requesting microphone access...");
     requestMicPermission();
     // Generate questions
     generateQuestions();
     watch(playButton, (newVal) => {
       if (newVal) {
         isIntroPlaying.value = true;
         const introAudio = playIntro("/spellingBee/spellingintro.mp3");
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
   });
   </script>