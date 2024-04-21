const { GenerativeModel } = require("@google/generative-ai");

// Load your API key securely (assuming you're using a .env file)
require("dotenv").config();
const apiKey = process.env.GEMINI_API_KEY;

// Create a GenerativeModel instance
const model = new GenerativeModel(apiKey);

async function main() {
  try {
    // Text-only input example
    const prompt = "Write a poem about nature.";
    const response = await model.run({ prompt });
    console.log(response.texts[0]);

    // Text-and-image input example (assuming you have an image file)
    // const image = fs.readFileSync('path/to/your/image.jpg'); // Read image data
    // const response = await model.run({ prompt, image });
  } catch (error) {
    console.error(error);
  }
}

main();
