import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profileImage from '../Assets/tanmaypic.jpg'; // Import the local image
import resume from '../Assets/Tanmay resume.pdf'; // Adjust path as needed

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Tanmay Chandgude </span>
            </h1>
            <p className="text-xl text-black-1000 mb-8">
              Full Stack Developer & AI/ML Enthusiast
            </p>
            <p className="text-lg text-black-700 mb-8">
              Building user-friendly websites with a mix of creativity and technical skills. I focus on creating smooth, functional digital experiences, using a variety of tools and technologies to turn ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href={resume} // Use the imported resume path
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 gap-2"
              >
                <FileText size={20} />
                <span>Resume</span>
              </a>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/Tanmay-Chandgude" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tanmay-chandgude-7a8712249/" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
              </a>
              <a href="mailto:tanmaychandgude.007@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src={profileImage} // Use the imported local image
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
