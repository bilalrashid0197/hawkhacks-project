import React, { useState } from 'react';
import BrainImage from '../../assets/img.png';
import '../../index.css'; // Make sure your CSS file is imported

const Learn = ({ topicName, highLevelOverview, youtubeLink }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [quizAnswers, setQuizAnswers] = useState([]);

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

  return (
      // Inside your Learn component JSX

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
