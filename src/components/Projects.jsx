
import React from "react";

const Projects = () => {
  // Manually added projects
  const projects = [
    {
      title: "Thapar Social Media App",
      description: "A social media platform with real-time messaging powered by Socket.IO.",
      githubLink: "https://github.com/KashishAgarwal0/TechThap1.git",
      demoLink: "https://techthapnew.onrender.com/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      githubLink: "https://github.com/KashishAgarwal0/Myportfolio.git",
      demoLink: "https://kashishagarwal.netlify.app/",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeather API.",
      githubLink: "https://github.com/KashishAgarwal0/Weathery-API.git",
      demoLink: "https://wea-thery.netlify.app/",
    },
    
    {
      title: "Simon Game",
      description: "A simple javascript based game where player has to keep track of the sequence.",
      githubLink: "https://github.com/KashishAgarwal0/TheSimon-Game.git",
      demoLink: "https://simon-who.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">My Projects</h2>
        <p className="mt-4 text-gray-600">A collection of my work.</p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border"
            >
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
