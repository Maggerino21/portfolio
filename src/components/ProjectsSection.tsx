import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and Node.js. Features include user authentication, real-time updates, and database integration.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      links: {
        github: "https://github.com/yourusername/project-one",
        live: "https://project-one.com"
      }
    },
    {
      title: "Project Two",
      description: "An AI-powered image processing tool that uses machine learning to enhance and transform photos.",
      technologies: ["Python", "PyTorch", "Flask", "React"],
      links: {
        github: "https://github.com/yourusername/project-two",
        live: "https://project-two.com"
      }
    },
    {
      title: "Project Three",
      description: "A mobile-first e-commerce platform with advanced filtering and search capabilities.",
      technologies: ["React Native", "Firebase", "Node.js", "Stripe"],
      links: {
        github: "https://github.com/yourusername/project-three",
        live: "https://project-three.com"
      }
    }
  ];

  const handlePrevious = () => {
    setActiveProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-900/30 py-16">
      <h2 className="text-4xl font-mono text-center mb-16">Projects</h2>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full backdrop-blur-sm hover:bg-gray-700/80 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full backdrop-blur-sm hover:bg-gray-700/80 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Project Display */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
                  {/* Project Image */}
                  <div className="aspect-video bg-gray-700 relative">
                    <img
                      src="/api/placeholder/800/450"
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-mono">{project.title}</h3>
                      <div className="flex gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeProject === index ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;