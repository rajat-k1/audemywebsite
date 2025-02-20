<template>
    <div
        class="flex flex-col justify-center items-center h-screen font-poppins bg-[#FAEDD6]"
    >
        <div class="flex mt-2 mb-2 w-1/2">
            <button onclick="history.back()">
                <img
                    src="/assets/gameImages/buttons/arrow-back.svg"
                    class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                    alt="Back Button Image"
                />
            </button>
        </div>
        <div class="flex flex-col my-2 mx-56 h-96 justify-center items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="text-4.5xl font-bold">Subtraction Safari</h1>
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
                v-else-if="
                    numOfAudiosPlayed < allQuestionslength &&
                    playButton === true
                "
                class="flex flex-col p-4 justify-center"
                id="content"
            >
                <div class="flex flex-row gap-4">
                    <div class="p-2 px-5 text-[#087bb4]">
                        &#9432; Hold 'SPACE' to say the answer | Press 'R' to repeat question
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
                    Score: {{ score }} / {{ allQuestionslength }}
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
    fetch("/assets/questionsDb/subtractionDB.json")
        .then((response) => response.json())
        .then((data) => {
            let allQuestions = [
                ...data["SubtractionGame"]["Questions"]["Easy"],
                ...data["SubtractionGame"]["Questions"]["Medium"],
                ...data["SubtractionGame"]["Questions"]["Hard"],
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

    // Generate questions
    generateQuestions();

    watch(playButton, (newVal) => {
        if (newVal) {
            isIntroPlaying.value = true;
            const introAudio = playIntro("/subtractionSafari/subtractionintro.mp3");
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
