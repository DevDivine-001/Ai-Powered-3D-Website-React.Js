import express from "events"
import * as dotenv from "dotenv"
import { configuration, OpenAI } from "openai"


dotenv.config()

const router = express.Router()


router.router('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})