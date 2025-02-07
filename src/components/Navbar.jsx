import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">KA</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute w-full bg-gray-800 flex flex-col items-center py-5 space-y-5 transition-all duration-300 ${
          menuOpen ? "top-16 opacity-100" : "top-[-250px] opacity-0"
        } md:hidden`}
      >
        <li><a href="#about" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#projects" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
