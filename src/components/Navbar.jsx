

import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Rotation Animation */}
        <div className="text-3xl font-extrabold tracking-wide text-cyan-300 transition-transform duration-500 hover:rotate-[360deg]">
          KA
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-10 font-semibold text-lg">
          <li className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <FaUser className="text-cyan-300" />
            <a href="#about" className="hover:text-cyan-300 transition duration-300">About</a>
          </li>
          <li className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <FaProjectDiagram className="text-cyan-300" />
            <a href="#projects" className="hover:text-cyan-300 transition duration-300">Projects</a>
          </li>
          <li className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <FaEnvelope className="text-cyan-300" />
            <a href="#contact" className="hover:text-cyan-300 transition duration-300">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer text-cyan-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full bg-gray-800 flex flex-col items-center py-6 space-y-6 transition-transform duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } lg:hidden font-semibold text-lg`}
      >
        <ul className="flex flex-col items-center space-y-5">
          <li className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <FaUser className="text-cyan-300" />
            <a href="#about" className="hover:text-cyan-300 transition duration-300" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <FaProjectDiagram className="text-cyan-300" />
            <a href="#projects" className="hover:text-cyan-300 transition duration-300" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <FaEnvelope className="text-cyan-300" />
            <a href="#contact" className="hover:text-cyan-300 transition duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
