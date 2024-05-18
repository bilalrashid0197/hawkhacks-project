import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import BrainImage from '../../assets/img.png';
import '../../index.css'; // Make sure your CSS file is imported

const Home = () => {
  return (
      <div className="min-h-screen text-white bg-black">
        <header className="flex flex-col items-center justify-center text-center relative">
          <h1 className="text-7xl font-bold mb-8 shining-text">
            <Typewriter
                words={['Brain Matter!']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
            />
          </h1>
          <img
              src={BrainImage}
              alt="Brain"
              className="w-96 h-96 md:w-128 md:h-128"
          />
        </header>
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-lg bg-gray-800">
                <img
                    src={BrainImage}
                    alt="Brain"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-lg">The human brain is an extraordinary organ that allows us to think, feel, and interact with the world.</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-gray-800">
                <img
                    src={BrainImage}
                    alt="Brain"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-lg">Did you know that the brain is composed of approximately 86 billion neurons?</p>
              </div>
              <div className="p-6 rounded-lg shadow-lg bg-gray-800">
                <img
                    src={BrainImage}
                    alt="Brain"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-lg">Discover how understanding the brain can lead to significant advancements in various fields.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">About Brain Matter</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Brain Matter is dedicated to exploring the incredible capabilities of the human brain. From its complex neural networks to its ability to adapt and change, we delve into the mysteries of this fascinating organ. Join us on a journey to discover how understanding the brain can unlock new potentials and improve our lives in remarkable ways.
            </p>
          </div>
        </section>
      </div>
  );
};

export default Home;

