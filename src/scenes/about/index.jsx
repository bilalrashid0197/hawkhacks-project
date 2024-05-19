import React from 'react';
import Ricky from '../../assets/ricky.jpg'
import Zaid from '../../assets/Zaid.jpeg'
import Bilal from '../../assets/Bilal.jpeg'
import Nirek from '../../assets/Nirek.jpeg'

const hackers = [
  {
    name: 'Zaid Dahir',
    description: 'Full-stack developer with a passion for cybersecurity and ethical hacking. Known for her expertise in JavaScript and Python.',
    avatar: Zaid, 
    socials: {
      instagram: 'https://instagram.com/zaiddahir',
      linkedin: 'https://www.linkedin.com/in/zaiddahir/',
      github: 'https://github.com/zdahir'
    }
  },
  {
    name: 'Bilal Rashid',
    description: 'Backend engineer and database specialist. Expert in SQL and NoSQL databases, with a knack for optimizing server performance.',
    avatar: Bilal, 
    socials: {
      instagram: 'https://instagram.com/bilalrashid',
      linkedin: 'https://www.linkedin.com/in/bilal-rashid-a04625198/',
      github: 'https://github.com/bilalrashid0197'
    }
  },
  {
    name: 'Ricky Tran',
    description: 'Frontend wizard with a love for design and user experience. Skilled in React, Tailwind CSS, and creating beautiful web interfaces.',
    avatar: Ricky, 
    socials: {
      instagram: 'https://www.instagram.com/rickytran21/',
      linkedin: 'https://www.linkedin.com/in/ricky-tran-cs/',
      github: 'https://github.com/rickycse/rickycse'
    }
  },
  {
    name: 'Nirek',
    description: 'DevOps guru and cloud enthusiast. Experienced in CI/CD, containerization, and automating infrastructure with tools like Docker and Kubernetes.',
    avatar: Nirek, 
    socials: {
      instagram: 'https://www.instagram.com/nirek1306/',
      linkedin: 'https://www.instagram.com/nirek1306/',
      github: 'https://www.linkedin.com/in/nirek-shetty-a9a7322b5/'
    }
  },
];

const About = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10">Meet the Hackers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hackers.map((hacker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div className="text-center">
                <img
                  src={hacker.avatar}
                  alt={hacker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-2xl font-semibold">{hacker.name}</h2>
                <p className="text-gray-600 mt-2">{hacker.description}</p>
              </div>
              <div className="flex justify-center mt-4">
                {hacker.socials && Object.entries(hacker.socials).map(([platform, url], index) => (
                  <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img
                      src={`https://img.icons8.com/ios-filled/50/000000/${platform}.png`}
                      alt={platform}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
