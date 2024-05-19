import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './scenes/home/index.jsx';
import About from './scenes/about/index.jsx';
import Brain from './scenes/brain/index.jsx';
import Personalize from './scenes/personalize/index.jsx'; // Adjust the import path as necessary
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Forum from './scenes/forum/index.jsx';
import Learn from './scenes/Learn/index.jsx'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/team" element={<About />} />
          <Route path="/send-tokens" element={<Personalize />} /> 
            <Route path="/learn" element={<Learn
            topicName={'Calculus'}
            highLevelOverview={'Calculus is a branch of mathematics that deals with the study of rates of change and accumulation of quantities. It consists of two main branches: differential calculus and integral calculus.\n' +
                '\n' +
                'Differential calculus focuses on the concept of derivatives, which represent the rate of change of a function at a particular point. It involves techniques for finding derivatives, such as the power rule, product rule, quotient rule, and chain rule. Derivatives are used to solve problems involving optimization, related rates, and graph sketching.\n' +
                '\n' +
                'Integral calculus, on the other hand, deals with the concept of integrals, which represent the accumulation of quantities over a certain interval. It involves techniques for finding integrals, such as the fundamental theorem of calculus, substitution, integration by parts, and partial fractions. Integrals are used to solve problems involving area, volume, work, and other applications.\n' +
                '\n' +
                'Overall, calculus provides a powerful framework for analyzing and modeling various phenomena in science, engineering, economics, and other fields by understanding how quantities change and accumulate over time or space.'}
            youtubeLink={'https://www.youtube.com/embed/HfACrKJ_Y2w\n'}

            />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
