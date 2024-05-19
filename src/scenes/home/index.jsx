import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className="">
        <section className="sticky">
          <div className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="font-extrabold leading-10 tracking-tight text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
              <span className="inline md:block">Brain</span>
              <span className="relative mt-2 bg-clip-text text-[#201515] md:inline-block">Matter.</span>
            </h1>
          </div>

          <div className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center">
            <div className='text-center py-4 space-x-4'>
              <button onClick={() => window.location.href = 'https://4038337.propelauthtest.com/en/login'} className="backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span>Login</span>
              </button>
              <button onClick={() => window.location.href = 'https://4038337.propelauthtest.com/en/signup'} className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </section>

        <div className="text-left">
          {/* Other content of the Home component */}
        </div>
      </div>
  );
};

export default Home;

