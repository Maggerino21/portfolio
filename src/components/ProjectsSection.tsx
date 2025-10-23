import React, { useState } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Fortuno",
      description: "A personal finance app that let's users keep track of their net worth through data from banks, crypto and more.",
      technologies: ["React", "Next.js", "TypeScript", "Supabase"],
      github: "https://github.com/maggerino21/fortuno",
      image: "/fortunomarketing.png"
    },
    {
      title: "MoorAI",
      description: "desktop program that uses AI to automate extracting component data from manufacturer documents for fish breeding facilities.",
      technologies: ["Electron", "AI", "Document Parsing"],
      image: "/MoorAIindex.png"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900/30 py-16 flex flex-col items-center justify-center">
      <h6>Projects</h6>
      
      <div className="max-w-6xl mx-auto px-8 relative">
        <div className="text-center transition-opacity duration-500 ease-in-out">
          <div className="mb-6">
            <img
              key={currentIndex}
              src={currentProject.image}
              alt={`${currentProject.title} screenshot`}
              className="w-full max-w-2xl mx-auto rounded-lg border border-gray-700 transition-all duration-500 ease-in-out"
            />
          </div>

          <h3 className="mb-4 inline-block transition-opacity duration-500">
            {currentProject.title}
          </h3>

          {currentProject.github && (
            <div className="mb-4 transition-opacity duration-500">
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          )}

          <p className="text-gray-300 font-mono max-w-2xl mx-auto mb-6 leading-relaxed transition-opacity duration-500">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 transition-opacity duration-500">
            {currentProject.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {projects.length > 1 && (
          <>
            <button
              onClick={prevProject}
              className="absolute -left-16 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 rounded-full transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={nextProject}
              className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 rounded-full transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </>
        )}

        {projects.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-200 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;