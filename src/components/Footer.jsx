import React from "react";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg">&copy; {currentYear} Kashish Agarwal. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://x.com/Kashish8Agarwal" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} className="hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/kashish-agarwal-7a4bb3278/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/KashishAgarwal0" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
