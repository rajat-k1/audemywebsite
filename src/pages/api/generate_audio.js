import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import dotenv from "dotenv";

dotenv.config();
// Ensure that the environment variable is set
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error(
        "GOOGLE_APPLICATION_CREDENTIALS environment variable is not set."
    );
    process.exit(1);
}
const client = new TextToSpeechClient();

export default async function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "Welcome to the TTS API" });
    }
    if (req.method === "POST") {
        console.log("POST request received");
        const { text } = req.body;

        // if (!text) {
        //     return res.status(400).json({ error: "Text is required" });
        // }

        // try {
        //     const request = {
        //         input: { text },
        //         voice: {
        //             languageCode: "en-US",
        //             ssmlGender: "NEUTRAL",
        //             name: "en-US-Standard-H",
        //         },
        //         audioConfig: { audioEncoding: "MP3" },
        //     };

        //     const [response] = await client.synthesizeSpeech(request);

        //     res.setHeader("Content-Type", "audio/mpeg");
        //     res.status(200).send(response.audioContent);
        // } catch (error) {
        //     console.error("Error generating TTS:", error);
        //     res.status(500).json({ error: "Failed to generate TTS" });
        // }
        // } else {
        //     res.status(405).json({ error: "Method Not Allowed" });
    }
}
