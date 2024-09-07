import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OpenAI_API_KEY,
});

const openai = new OpenAIApi(config);

// router.route('/').get((req, res) => {
//     res.status(200).json({ message: "Hello from DALL.E ROUTES" })
// })

// router.route('/').post(async (req, res) => {
//     try {
//         const { prompt } = req.body;

//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json'
//         });

//         const image = response.data.data[0].b64_json;

//         res.status(200).json({ photo: image });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong" })
//     }
// })

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = response.data.data[0].b64_json;
        res.status(200).json({ photo: image });
    } catch (error) {
        if (error.response) {
            console.error('Error from OpenAI:', error.response.data);
            res.status(500).json({
                message: 'OpenAI API Error',
                error: error.response.data
            });
        } else {
            console.error('Error:', error.message);
            res.status(500).json({
                message: 'Something went wrong',
                error: error.message
            });
        }
    }
});

export default router;


// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY, // Ensure your environment variable is correctly named
// });

// const openai = new OpenAIApi(configuration);

// router.post('/', async (req, res) => {
//     try {
//         const { prompt } = req.body;

//         // Check if the prompt is provided in the request body
//         if (!prompt || typeof prompt !== 'string') {
//             return res.status(400).json({ message: "Prompt is required and must be a string" });
//         }

//         // Make the API request to OpenAI
//         const response = await openai.createImage({
//             prompt, // Use the provided prompt
//             n: 1, // Generate one image
//             size: '1024x1024', // Size of the image
//             response_format: 'b64_json' // Return as base64 encoded JSON
//         });

//         // Check if the API returned image data
//         if (response.data && response.data.data && response.data.data.length > 0) {
//             const image = response.data.data[0].b64_json;
//             return res.status(200).json({ photo: image });
//         } else {
//             // No image data returned from OpenAI
//             return res.status(500).json({ message: "No image data returned from API" });
//         }
//     } catch (error) {
//         // If error comes from the API, log and return more detailed information
//         if (error.response) {
//             console.error('Error from OpenAI:', error.response.data);
//             return res.status(error.response.status || 500).json({
//                 message: 'OpenAI API Error',
//                 error: error.response.data
//             });
//         } else {
//             // Handle any other types of errors (network, environment, etc.)
//             console.error('Error:', error.message);
//             return res.status(500).json({
//                 message: 'Something went wrong',
//                 error: error.message
//             });
//         }
//     }
// });

// export default router;


// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY, // Make sure the environment variable name is correct
// });

// const openai = new OpenAIApi(configuration);

// router.post('/', async (req, res) => {
//     try {
//         const { prompt } = req.body;

//         // Simulate a successful OpenAI API response
//         // const mockResponse = {
//         //     data: {
//         //         data: [
//         //             { b64_json: "mocked_base64_image_data" }
//         //         ]
//         //     }
//         // };

//         // Replace this with the actual OpenAI API call once billing is fixed
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json'
//         });

//         const image = response.data.data[0].b64_json;
//         return res.status(200).json({ photo: image });
//     } catch (error) {
//         console.error('Error:', error.message);
//         return res.status(500).json({
//             message: 'Something went wrong',
//             error: error.message
//         });
//     }
// });


// export default router;

// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration, OpenAIApi } from 'openai';

// dotenv.config();

// const router = express.Router();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY, // Make sure the environment variable name is correct
// });

// const openai = new OpenAIApi(configuration);

// router.post('/', async (req, res) => {
//     try {
//         const { prompt } = req.body;

//         // Validate that the prompt is provided
//         if (!prompt) {
//             return res.status(400).json({ message: "Prompt is required" });
//         }

//         // Make the API call to OpenAI
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json'
//         });

//         // Check if the response contains image data
//         if (response.data && response.data.data && response.data.data.length > 0) {
//             const image = response.data.data[0].b64_json;
//             return res.status(200).json({ photo: image });
//         } else {
//             return res.status(500).json({ message: "No image data returned from API" });
//         }
//     } catch (error) {
//         // Handle and log API errors
//         if (error.response) {
//             console.error('Error from OpenAI:', error.response.data);
//             return res.status(error.response.status || 500).json({
//                 message: 'OpenAI API Error',
//                 error: error.response.data
//             });
//         } else {
//             // Handle and log other errors
//             console.error('Error:', error.message);
//             return res.status(500).json({
//                 message: 'Something went wrong',
//                 error: error.message
//             });
//         }
//     }
// });

// export default router;
