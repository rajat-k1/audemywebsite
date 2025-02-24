<template>
    <div class="min-h-screen font-poppins bg-[#EAD2B0]">
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
        
        <!-- Main Content -->
        <div class="flex flex-col justify-center items-center h-[calc(90vh-64px)]">
            <div class="text-center mb-6">
                <h1 class="text-4.5xl font-bold">Polar Pairing</h1>
            </div>
            
            <div v-if="playButton === false">
                <button
                    @click="playButton = true"
                    class="bg-[#087bb4] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#0d5f8b]"
                >
                    Play
                </button>
            </div>
            
            <div
                v-else-if="numOfAudiosPlayed < 5 && playButton === true"
                class="flex flex-col p-4 justify-center items-center w-full max-w-2xl"
                id="content"
            >
                <div class="flex flex-row gap-4 mb-4">
                    <div class="p-2 px-5 text-[#087bb4]">
                        &#9432; Hold 'SPACE' to say the answer | Press 'R' to repeat question
                    </div>
                </div>
                
                <!-- Add buttons like in Spelling Bee -->
                <div class="flex gap-4 mb-6">
                    <!-- Record Answer Button -->
                    <button
                        class="flex items-center justify-center gap-2 px-8 py-4 rounded-xl shadow-md bg-[#0096D6] text-white"
                        :class="isListening ? 'bg-red-500' : ''"
                    >
                        <span class="text-lg font-medium">Record Answer</span>
                        <img
                            src="/assets/gameImages/buttons/mic.png"
                            class="w-6 h-6"
                            alt="Record Icon"
                        />
                    </button>
                    
                    <!-- Repeat Question Button -->
                    <button
                        @click="repeatQuestion"
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
    isIntroPlaying = ref(false);

// Generate multiplication questions using Json file
const generateQuestions = () => {
    console.log("Generating Questions...");
    // Generate 5 random numbers for the questions
    while (randQueNum.length < 5) {
        let num = Math.floor(Math.random() * 10);
        if (!randQueNum.includes(num)) {
            randQueNum.push(num);
        }
    }
    // Fetch questions from JSON file
    fetch("/assets/questionsDb/polarPairingDB.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(
                "Questions:",
                data["PolarPairingGame"]["Questions"]["Easy"]
            );
            // Process the questions data as needed
            questionsDb = data["PolarPairingGame"]["Questions"]["Easy"];
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

// Function to repeat the current question
const repeatQuestion = () => {
    if (numOfAudiosPlayed.value < 5 && !isIntroPlaying.value) {
        playNextQuestion();
    }
};

// Handle the spacebar events
const handleKeyDown = (event) => {
    if (event.code === "KeyR" && 
        numOfAudiosPlayed.value < 5 && 
        !isIntroPlaying.value) {
        playNextQuestion();
        return;
    }

    if (
        event.code === "Space" &&
        !isListening.value &&
        numOfAudiosPlayed.value < 5 &&
        !isIntroPlaying.value
    ) {
        isListening.value = true;
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
            const introAudio = playIntro("/polarpairing/oppintro.mp3");
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