
import React from "react";
import image from '../assets/png1.png';

const Home = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-between bg-[#0a0a23] overflow-hidden px-12"
    >
      {/* Twinkling Stars Animation */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:w-full before:h-full before:bg-[radial-gradient(circle,#3b3b3b_1px,transparent_1px)] before:bg-[size:40px_40px] before:opacity-20 after:content-[''] after:absolute after:w-full after:h-full after:bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] after:bg-[size:60px_60px] after:opacity-10 after:animate-[twinkle_3s_infinite]"></div>

      {/* Left Side - Text Content */}
      <div className="relative z-10 w-1/2">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-white">Kashish Agarwal</span>
          <span className="text-blue-400">.</span>
        </h1>

        <p className="mt-4 text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-400 via-blue-500 to-blue-700 text-transparent bg-clip-text">
          I'm a <span className="text-blue-400">Software Developer</span>
        </p>

        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          View My Work
        </a>
      </div>

      {/* Right Side - Animated Image with Hover Bounce Effect */}
<div className="relative z-10 w-1/2 flex justify-center group">
  <img
    src={image} // Update this path if needed
    alt="Animated Developer"
    className="w-[400px] md:w-[500px] transition-transform duration-300 group-hover:animate-bounce"
  />
</div>

    </section>
  );
};

export default Home;
