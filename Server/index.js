// import express from "express"
// import * as dotenv from "dotenv"
// import cors from "cors"


// dotenv.config()

// const app = express();

// app.use(cors());
// app.use(express.json({ limit: "50mb" }))


// app.get().then(() => {
//     console.log('Connected to mongoosedb🚀🚀🚀🚀!');

// }).catch((error) => {
//     console.log(error);
// });

// app.get('/', (req, res) => {
//     res.status(200).json({ message: "Hello  Server 8000 is on" })
// })

// app.listen(8000, () => {
//     console.log('Sever is on  port 8000 baby 👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋🏀🏀🏀🏀🏀🏀 ');

// })


import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import dalleroutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleroutes);

// MongoDB connection
mongoose
    .connect(process.env.mongoose)
    .then(() => {
        console.log("Connected to Sever on port 8000 🏀🏀🏀🏀🏀🏀 🚀🚀🚀🚀!");
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB", error);
    });

// Route to test the server
app.get("/", (req, res) => {
    console.log(req);

    res.status(200).json({ message: "Hello, Server 8000 is on!" });
});

// Start the server
app.listen(8000, () => {
    console.log('Sever is on  port 8000 baby 👋👋👋👋👋👋👋👋👋👋👋👋👋👋👋🏀🏀🏀🏀🏀🏀 ');
});