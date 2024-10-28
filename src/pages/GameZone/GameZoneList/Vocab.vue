<template>
    <div class="flex flex-col justify-center items-center h-screen bg-teal-100">
        <div class="flex mt-2 mb-2 w-1/2">
            <button onclick="history.back()">
                <img src="../../../assets/gameImages/buttons/arrow-back.svg"
                    class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300" />
            </button>
        </div>
        <div class="flex flex-col items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="barriecito-regular text-6xl font-bold">
                    Vocab Vortex
                </h1>
                <div class="flex flex-col p-4 justify-center" id="content">
                    <div class="pt-2 pb-1">
                        You said: {{ transcript }}
                    </div>
                    <div class="pt-1 pb-2">
                        Result: {{ result }}
                    </div>
                    <div id="score" class="pt-1 pb-2" ref="scoreRef">
                        Score: {{ points }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            answers: ["quick", "calm", "huge", "brave", "believe"],
            recognition: null,
            isRecording: false,
            audioContext: null,
            points: 0,
            audioNum: 0,
            transcript: "",
            result: "",
            currentAudios: [], // Array to track active audio elements
            recordSound: new Audio("/assets/generalAudio/ding-sound.mp3"),
        };
    },
    methods: {
        stopAllAudios() {
            // Loop through all currently playing audios and stop them
            this.currentAudios.forEach((audio) => {
                audio.pause(); // Stop the audio playback
                audio.currentTime = 0; // Reset the audio time
            });
            this.currentAudios = []; // Clear the array
        },

        async requestMicPermission() {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                console.log("Microphone access granted");
                this.audioContext = new (window.AudioContext ||
                    window.webkitAudioContext)();
                this.initializeSpeechRecognition();
            } catch (error) {
                console.error("Microphone access denied:", error);
            }
        },
        initializeSpeechRecognition() {
            window.SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = "en-US";
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onresult = async (event) => {
                const transcript = event.results[0][0].transcript;
                console.log("Transcription:", transcript);
                this.transcript = transcript;
                await this.checkAnswer(transcript, this.audioNum, this.answers);
                this.audioNum++;
                this.displayScore();

                if (this.audioNum < this.answers.length) {
                    await this.playAudio(this.audioNum);
                } else {
                    await this.endGame();
                }
            };

            this.recognition.onerror = (event) => {
                console.error("Recognition error:", event.error);
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                console.log("Stopped recording");
            };
        },
        startRecording() {
            if (!this.isRecording && this.audioContext) {
                this.recognition.start();
                this.isRecording = true;
                console.log("Started recording...");
                this.recordSound.play();
            }
        },
        stopRecording() {
            if (this.isRecording) {
                this.recognition.stop();
            }
        },
        async playAudio(audioNum) {
            let path = `/assets/vocabVortex/vocab${audioNum + 1}.mp3`;
            console.log("Playing audio path:", path);

            // Stop any currently playing audio before starting new one
            this.stopAllAudios();

            await this.playAudioPath(path);
            console.log("Waiting for user input...");
            await this.waitForUserInput();
        },
        playAudioPath(path) {
            return new Promise((resolve) => {
                let audio = new Audio(path);
                audio.play();

                // Add the audio to currentAudios array to track it
                this.currentAudios.push(audio);

                audio.onplay = () => {
                    this.isRecording = true;
                };

                audio.onended = () => {
                    this.isRecording = false;
                    console.log("Audio ended.");
                    resolve();
                };
            });
        },
        waitForUserInput() {
            return new Promise((resolve) => {
                console.log("Start speech recognition for user input.");
                // this.startRecording();
                resolve();
            });
        },
        async checkAnswer(answer, audioNum, answers) {
            console.log(answers[audioNum]);
            if (
                answer.trim().toLowerCase() === answers[audioNum].toLowerCase()
            ) {
                this.result = "Result: CORRECT";

                // Stop all current audios before playing the correct/incorrect audio
                this.stopAllAudios();

                await this.playAudioPath(
                    "/assets/generalAudio/correctaudio.mp3"
                );
                this.points++;
            } else {
                this.result = "Result: INCORRECT";

                this.stopAllAudios();

                await this.playAudioPath(
                    "/assets/generalAudio/incorrectaudio.mp3"
                );
            }
        },
        displayScore() {
            const myScoreDiv = this.$refs.scoreRef;
            myScoreDiv.textContent = "Score: " + this.points;
        },
        async endGame() {
            // Reference to the score display element
            const myScoreDiv = this.$refs.scoreRef;
            if (myScoreDiv) {
                // Update the score display with a game over message
                myScoreDiv.textContent = `Game Over! Your Final Score: ${this.points}/5`;
            } else {
                console.error("Score ref not found in endGame.");
            }

            this.stopAllAudios();

            await this.playAudioPath("/assets/generalAudio/youGot.mp3");
            await this.playAnswer(this.points);
            await this.playAudioPath("/assets/generalAudio/outof.mp3");
            await this.playAnswer(5);
        },
        playAnswer(points) {
            return new Promise((resolve) => {
                const msg = new SpeechSynthesisUtterance();
                msg.text = points.toString();
                window.speechSynthesis.speak(msg);

                msg.onend = () => resolve();
            });
        },
        async playIntroAudio() {
            return new Promise((resolve) => {
                let audioIntro = new Audio(
                    "/assets/vocabVortex/vortexintro.mp3"
                );
                console.log("Playing intro audio now ...");
                console.log(
                    "Attempting to play intro audio from path:",
                    audioIntro.src
                ); // Log the path
                audioIntro.play();

                // Add the intro audio to the tracking array
                this.currentAudios.push(audioIntro);

                audioIntro.onended = () => {
                    console.log("Intro audio ended.");
                    resolve();
                };
            });
        },
        handleKeyDown(event) {
            if (event.key === " " && !this.isRecording) {
                this.startRecording();
            }
            if (event.shiftKey) {
                console.log("Audio button pressed!");
                this.playAudio(this.audioNum);
            }
        },
        handleKeyUp(event) {
            if (event.key === " " && this.isRecording) {
                this.stopRecording();
            }
        },
    },
    async mounted() {
        await this.requestMicPermission();
        await this.playIntroAudio();
        await this.playAudio(this.audioNum);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    },
    beforeUnmount() {
        this.stopAllAudios();
        if (this.recognition) {
            this.stopRecording();
        }
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
    },
};
</script>

<style scoped>
/* Background color */
.bg-teal-100 {
    background-color: #faedd6;
    /* Light beige background similar to the image */
}

/* Font settings for title */
.barriecito-regular {
    font-family: "Barriecito", sans-serif;
    color: #2f2f2f;
    /* Dark text color similar to the example */
    text-align: center;
}
</style>
