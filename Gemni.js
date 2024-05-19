//npm install @google/generative-ai

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBelNC78JHbK2szV_V6ErVusxd0SbeSrE4');

async function topics(Name, Mindset , LearningStyle , Language , Conditions) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `I want you to generate a list of topics to study for a boy named ${Name} his self described mindset is ${Mindset}  his language is ${Language} and he has the Conditions ${Conditions} return a list of 200 subjects he may be interested in a csv format separated by commas' `

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function populate( Topic ,  Mindset , LearningStyle ) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `My Topic is ${Topic} give me a video , a high level overview in a csv format`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function VideoQuiz(link) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `${link} generate me a list of ten questions based on the video link i provided  in a comma seperated format for example (question:answer , question:answer)`
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
async function Quiz(topic) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `This is  my topic ${topic} generate me a list of questions and answers in a comma seperated list`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

async function validateAnswer(question , answer) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `determine is ${answer} is a valid response to the question: ${question} return either 'True' or 'False'`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}

async function talk(question) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = `${question}`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}











