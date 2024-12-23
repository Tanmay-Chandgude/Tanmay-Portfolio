import React from 'react';
import { ArrowUp } from 'lucide-react';
import resume from '../Assets/Tanmay resume.pdf'; // Adjust path as needed


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Looking for a passionate developer ?
            </h3>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Work Together
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#achievements" className="hover:text-blue-400">Achievements</a></li>
                <li><a href="#education" className="hover:text-blue-400">Education</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="hover:text-blue-400">Get in Touch</a></li>
                <li>
                  <a
                      href={resume} // Link to the resume PDF
                      className="hover:text-blue-400"
                      target="_blank" // Open the resume in a new tab
                      rel="noopener noreferrer" // For security reasons
                    >
                      Resume
                  </a>  
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/Tanmay-Chandgude" className="hover:text-blue-400">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/tanmay-chandgude-7a8712249/" className="hover:text-blue-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Tanmay Chandgude. All rights reserved.</p>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;