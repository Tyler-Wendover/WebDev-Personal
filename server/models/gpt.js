import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const gptApi = new OpenAIApi(configuration);

async function createContent(title) {
    const completion = await OpenAIApi.createCompletion({
        model: "text-davinci-003", 
        prompt: `Create description for "${title}" to be used on an exercise tracker site`,
        temperature: 0.18,
    })
    const aiContent = completion?.choices[0].text?.trim();
    return aiContent;
}

module.exports = {
    createContent,
};

