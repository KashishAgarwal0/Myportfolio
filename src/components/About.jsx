// import React from "react";
// import image from '../assets/portfolio.jpg';
// const About = () => {
//   return (
//     <section id="about" className="py-16 bg-[#0A0A0A] text-white">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-6">
        
//         {/* Profile Section */}
//         <div className="relative">
//           {/* Profile Image with Circle Background */}
//           <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-2xl">
//             <img
//               src={image} // Update with actual image path
//               alt="Kashish Agarwal"
//               className="w-60 h-60 md:w-68 md:h-68 object-cover rounded-full border-4 border-white"
//             />
//           </div>

//           {/* Floating Skill Tags */}
//           <div className="absolute top-4 left-0 flex flex-wrap gap-2">
//             <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm shadow-md">C++</span>
//             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">React.js</span>
//             <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm shadow-md">AI/ML</span>
//             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">SQL</span>
//           </div>
//         </div>

//         {/* About Text Section */}
//         <div className="mt-8 md:mt-0 text-center md:text-left">
//           <h2 className="text-3xl font-bold text-blue-400">ABOUT ME</h2>
//           <p className="mt-4 text-gray-300 text-lg leading-relaxed">
    
//             Hi, I'm <span className="font-semibold text-white">Kashish Agarwal</span>, a passionate 
//             Computer Science Engineering student at <span className="font-semibold">Thapar Institute of Engineering and Technology</span>. 
//             I specialize in <span className="font-semibold text-white">Object-Oriented Programming, Data Structures, AI/ML, and High-Performance Computing</span>.  
//             I love solving complex problems and building innovative solutions using <span className="font-semibold text-white">C++, Python, JavaScript</span>.
//           </p>

//           {/* Key Achievements Section
//           <div className="mt-6 flex justify-center md:justify-start space-x-8 text-center">
//             <div>
//               <p className="text-2xl font-bold text-blue-400">3+</p>
//               <p className="text-gray-300 text-sm">Projects Completed</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-blue-400">5+</p>
//               <p className="text-gray-300 text-sm">Tech Skills Mastered</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-blue-400">Top 15</p>
//               <p className="text-gray-300 text-sm">Hackathon Rank</p>
//             </div>
//           </div> */}

//           {/* Resume Button */}
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import image from '../assets/portfolio.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-12 px-6">
        
        {/* Profile Section */}
        <div className="relative group">
          {/* Profile Image with Circle Background */}
          <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:rotate-12">
            <img
              src={image}
              alt="Kashish Agarwal"
              className="w-60 h-60 md:w-68 md:h-68 object-cover rounded-full border-4 border-white "
            />
          </div>

          {/* Floating Skill Tags */}
          <div className="absolute top-4 left-0 flex flex-wrap gap-2">
            <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm shadow-md">C++</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">React.js</span>
            <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm shadow-md">AI/ML</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-md">SQL</span>
          </div>
        </div>

        {/* About Text Section */}
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-400">ABOUT ME</h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-white">Kashish Agarwal</span>, a passionate 
            Computer Science Engineering student at <span className="font-semibold">Thapar Institute of Engineering and Technology</span>. 
            I specialize in <span className="font-semibold text-white">Object-Oriented Programming, Data Structures, AI/ML, and High-Performance Computing</span>.  
            I love solving complex problems and building innovative solutions using <span className="font-semibold text-white">C++, Python, JavaScript</span>.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
