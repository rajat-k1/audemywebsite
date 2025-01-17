<template>
    <div
        class="flex flex-col justify-center items-center h-screen font-poppins bg-[#FAEDD6]"
    >
        <div class="flex mt-2 mb-2 w-1/2">
            <button onclick="history.back()">
                <img
                    src="/assets/gameImages/buttons/arrow-back.svg"
                    class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                />
            </button>
        </div>
        <div class="flex flex-col my-2 mx-56 h-96 justify-center items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="text-4.5xl font-bold">Car Counting</h1>
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
                class="flex flex-col p-4 justify-center"
                id="content"
            >
                <div class="flex flex-row gap-4">
                    <div class="p-2 px-5 text-[#087bb4]">
                        &#9432; Hold 'SPACE' to say the answer
                    </div>
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
    randQueNum = [],
    answers = [];
let numOfAudiosPlayed = ref(0),
    score = ref(0);
let questionsDb = [],
    isListening = ref(false),
    transcription = ref(""),
    playButton = ref(false);

// Generate random number of cars as Questions
const generateQuestions = () => {
    console.log("Generating Questions...");
    // Generate 5 random numbers for the questions
    while (randQueNum.length < 5) {
        let num = Math.floor(Math.random() * 5) + 1;
        if (!randQueNum.includes(num)) {
            randQueNum.push(num);
            const answerMap = {
                1: "one",
                2: "two",
                3: "three",
                4: "four",
                5: "five"
            };
            answers.push(answerMap[num]);
        }
    }
    console.log("Random Numbers: ", randQueNum);
    console.log("Answers: ", answers);
};

// Play the next question
const playNextQuestion = async () => {
    if (numOfAudiosPlayed.value < 5) {
        const audiosToPlay = [];

        // Add the initial audio
        playQuestion("Question Number " + (numOfAudiosPlayed.value + 1));

        // Add the car passing by audios
        for (let i = 0; i < randQueNum[numOfAudiosPlayed.value]; i++) {
            audiosToPlay.push("/assets/carCounting/carpassby.mp3");
        }

        // Play all car audios in sequence
        for (const audioSrc of audiosToPlay) {
            await new Promise((resolve) => {
                console.log("Playing - "+ audioSrc)
                const audio = new Audio(audioSrc);
                audio.play();
                audio.onended = resolve;
                currentAudios.push(audio);
            });
        }

        // Add the final audio
        playQuestion("How many cars did you hear? Hold 'SPACE' to say the answer");
    }
};

// Handle the spacebar events
const handleKeyDown = (event) => {
    if (
        event.code === "Space" &&
        !isListening.value &&
        numOfAudiosPlayed.value < 5
    ) {
        isListening.value = true;
        playSound("ding-sound.mp3");
        startListening((transcript) => {
            console.log("User Answer:", transcript);
            console.log("Correct Answer:", randQueNum[numOfAudiosPlayed.value]);
            transcription.value = transcript;
            if (transcript.trim() === answers[numOfAudiosPlayed.value]) {
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
const handleKeyUp = (event) => {
    if (event.code === "Space" && isListening.value) {
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
        const introAudio = playIntro("/carCounting/carCountIntro.mp3");
        currentAudios.push(introAudio);
        introAudio.onended = playNextQuestion;
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
