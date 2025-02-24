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
         <div class="absolute top-40 right-60 w-32 h-32">
           <svg viewBox="0 0 100 100" class="w-full h-full">
             <circle cx="50" cy="50" r="50" fill="#FFD137" />
           </svg>
         </div>
         
         <!-- Clouds - Positioned to avoid overlapping buttons -->
         <div class="absolute left-0 bottom-0">
           <img
             src="/assets/gameImages/cloud-bg.png"
             alt="Decorative cloud"
             class="w-2/3 opacity-80"
           />
         </div>
       </div>
       
       <!-- Game Content -->
       <div class="flex flex-col justify-center items-center h-[calc(90vh-64px)] relative z-10">
         <div class="mt-0">
           <img 
             src="/assets/gameImages/buttons/gameButtons/spellingBee.svg"
             alt="Game icon"
             class="w-27 h-27">
         </div>
         
         <div class="flex flex-col justify-center items-center">
           <div class="text-center">
             <h1 class="text-4.5xl font-bold">Spelling Bee</h1>
             <p class="text-lg mt-2 mb-8">Buzz your way to spelling mastery!</p>
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
             <div class="flex flex-row gap-4 mb-6">
               <div class="p-2 px-5 text-[#087bb4]">
                 Hold 'SPACE' to say the answer.
               </div>
             </div>
             
             <div class="flex gap-4 mb-6">
               <!-- Record Answer Button - Updated to match image 2 -->
               <button
                 class="flex items-center justify-center gap-2 px-8 py-4 rounded-xl shadow-md bg-[#0096D6] text-white"
                 :class="isRecording ? 'bg-red-500' : ''"
               >
                 <span class="text-lg font-medium">Record Answer</span>
                 <img
                   src="/assets/gameImages/buttons/mic.png"
                   class="w-6 h-6"
                   alt="Record Icon"
                 />
               </button>
               
               <!-- Repeat Question Button - Updated to match image 2 -->
               <button
                 class="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#0096D6] text-[#0096D6] shadow-md"
               >
                 <span class="text-lg font-medium">Repeat Question</span>
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