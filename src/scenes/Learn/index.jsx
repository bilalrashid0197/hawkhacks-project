import React, { useState } from 'react';
import BrainImage from '../../assets/img.png';
import '../../index.css'; // Make sure your CSS file is imported

const Learn = ({ topicName, highLevelOverview, youtubeLink }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [llmTip, setLlmTip] = useState('');
  const [helpText, setHelpText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Learning Style:', learningStyle);
    console.log('Quiz Answers:', quizAnswers);
    // You can add more logic here, such as sending data to a server
  };

  const handleLearningStyleChange = (e) => {
    setLearningStyle(e.target.value);
  };

  const handleQuizAnswerChange = (index, value) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = value;
    setQuizAnswers(newAnswers);
  };

  const handleLlmHelp = async () => {
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${helpText}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
      setLlmTip(text);
    } catch (error) {
      console.error('Error generating LLM tip:', error);
    }
  };

  const handleHelpTextChange = (e) => {
    setHelpText(e.target.value);
  };

  const handleSendHelpRequest = () => {
    // Here you can send the help request to the LLM or perform any other action
    console.log('Help Request:', helpText);
    handleLlmHelp();
    // For demonstration purposes, let's clear the help text after sending
    setHelpText('');
  };

  return (
      <div className="learn-container">
        <div className="learn-form">
          <form onSubmit={handleSubmit} className="p-8 learn-form">
            <h1 className="learn-heading shining-text">{topicName}</h1>
            <p className="learn-text">{highLevelOverview}</p>
            {/* Video Section */}
            <div className="learn-video mb-4">
              <iframe
                  width="100%"
                  height="315"
                  src={youtubeLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            {/* Quiz Section */}
            <div className="learn-quiz mb-4">
              <h2 className="text-lg font-semibold mb-2">Quick Quiz</h2>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1" htmlFor="question1">
                  Question 1: What is the capital of France?
                </label>
                <input
                    type="text"
                    id="question1"
                    value={quizAnswers[0] || ''}
                    onChange={(e) => handleQuizAnswerChange(0, e.target.value)}
                    className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your answer"
                />
              </div>
              {/* Add more quiz questions as needed */}
            </div>
            {/* LLM Help Section */}
            <div className="learn-llm mb-4">
              <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
              {/* Help Request Textbox */}
              <textarea
                  value={helpText}
                  onChange={handleHelpTextChange}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your request for help here..."
                  rows="3"
              ></textarea>
              {/* Send Help Request Button */}
              <button
                  onClick={handleSendHelpRequest}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Send Help Request
              </button>
              {/* Display LLM tip */}
              {llmTip && <p className="text-sm mt-2">{llmTip}</p>}
            </div>
            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                  type="submit"
                  className="learn-submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Learn;
