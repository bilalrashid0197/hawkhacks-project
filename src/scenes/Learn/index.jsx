import React, { useState } from 'react';
import BrainImage from '../../assets/img.png';
import '../../index.css'; // Make sure your CSS file is imported
import NeetCode from '../../assets/neetcode.jpg';
import Pepe from '../../assets/pepe.png';
import Popup from './components/Popup';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBelNC78JHbK2szV_V6ErVusxd0SbeSrE4');

const Learn = ({ topicName, highLevelOverview, youtubeLink }) => {
  const [visible, setVisible] = useState(true);
  const [chatLogs, setChatLogs] = useState([
  ]);
  const [userMessage, setUserMessage] = useState('');

  const togglePopup = () => {
    setVisible(!visible);
  };

  const chatBotContainer = (chatBotMessageSpan) => (
    <div className="chat-message">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          {chatBotMessageSpan}
        </div>
        <img src={NeetCode} alt="My profile" className="w-6 h-6 rounded-full order-1" />
      </div>
    </div>
  );

  const chatBotMessageSpan = (text) => (
    <div>
      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{text}</span>
    </div>
  );

  const userContainer = (userMessageSpan) => (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          {userMessageSpan}
        </div>
        <img src={Pepe} alt="My profile" className="w-6 h-6 rounded-full order-1" />
      </div>
    </div>
  );

  const userMessageSpan = (text) => (
    <div>
      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">{text}</span>
    </div>
  );

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    // Add user message to chat log
    setChatLogs([...chatLogs, [userMessage, "User"]]);

    // Call talk function and get response
    const response = await talk(userMessage);

    // Add bot response to chat log
    setChatLogs([...chatLogs, [userMessage, "User"], [response, "Gemini"]]);

    // Clear user message input
    setUserMessage('');
  };

  const talk = async (question) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${question}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
    return text;
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Chat Section */}
        <div className="w-2/5 flex flex-col p-2 sm:p-6 justify-between border-r-2 border-gray-200">
          <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <span className="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
                <img src={NeetCode} alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3">!NeetCode</span>
                </div>
                <span className="text-lg text-gray-600">Ex-Senior Software Engineer @ Google</span>
              </div>
            </div>
          </div>
          <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {chatLogs.map((message, index) => {
              const msg = message[0];
              const sender = message[1];

              if (sender === "Gemini") {
                return chatBotContainer(chatBotMessageSpan(msg));
              } else if (sender === "User") {
                return userContainer(userMessageSpan(msg));
              }
              return null;
            })}
          </div>
          <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <span className="absolute inset-y-0 flex items-center">
                <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="text"
                placeholder="Write your message!"
                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                  onClick={handleSendMessage}
                >
                  <span className="font-bold">Send</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-3/5 p-4">
          <h1 className="text-3xl font-bold mb-4">{topicName}</h1>
          <p className="mb-4">{highLevelOverview}</p>
          <div className="w-full max-w-md mx-auto mb-4">
            <iframe
              className="w-full h-48"
              src={youtubeLink}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div>
        <Popup togglePopup={togglePopup}/>
      </div> */}
    </>
    
  );
};

export default Learn;
