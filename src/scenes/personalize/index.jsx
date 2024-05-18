import React, { useState, useEffect } from 'react';
import BrainImage from '../../assets/img.png';

const Personalize = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [topics, setTopics] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [particles, setParticles] = useState([]);

  const createParticle = (x, y) => {
    const newParticle = { x, y, connections: [] };
    setParticles([...particles, newParticle]);
  };

  const distance = (p1, p2) => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const connectParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = distance(p1, p2);
        if (dist < 100) { // Adjust distance threshold as needed
          p1.connections.push(j);
          p2.connections.push(i);
        }
      }
    }
  };

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

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    createParticle(mouseX, mouseY);
  };

  useEffect(() => {
    connectParticles();
  }, [particles]);

  return (
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center text-white  p-5" onMouseMove={handleMouseMove}>
        <div className="flex flex-col text-left w-full max-w-md p-5 specialdiv">
          <form onSubmit={handleSubmit} className="p-8 w-full  rounded-lg shadow-lg">
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
        <div className="flex flex-col items-center justify-center w-full max-w-md p-5 mt-10 lg:mt-0 lg:ml-10">
          <img
              src={BrainImage}
              alt="Brain"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
          <p className="text-lg font-semibold mt-4 text-center">"Use your brain, earn more gain!"</p>
        </div>
      </div>
  );
};

export default Personalize;
