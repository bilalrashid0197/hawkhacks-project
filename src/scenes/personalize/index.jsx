import React, { useState } from 'react';

const Personalize = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [topics, setTopics] = useState('');
  const [learningStyle, setLearningStyle] = useState(''); // State for selected learning style

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Key Topics:', topics);
    console.log('Learning Style:', learningStyle);
    // You can add more logic here, such as sending data to a server
  };

  const handleLearningStyleChange = (e) => {
    setLearningStyle(e.target.value);
  };

  return (
      <div className="min-h-screen flex flex-col justify-start text-white" >

        <br />
        <br />
        <br />

        <div className="flex flex-col text-left w-full max-w-md p-5 specialdiv">
          <form onSubmit={handleSubmit} className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-6 text-center shining-text">Personalize Your Experience</h1>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="age">
                Age
              </label>
              <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your age"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="learningStyle">
                Learning Style
              </label>
              <select
                  id="learningStyle"
                  value={learningStyle}
                  onChange={handleLearningStyleChange}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your learning style</option>
                <option value="Visual">Visual</option>
                <option value="Auditory">Auditory</option>
                <option value="Kinesthetic">Kinesthetic</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="topics">
                MindSet
              </label>
              <textarea
                  id="Mindset"
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 1-2 sentences describing who you are and your interests"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Personalize;
