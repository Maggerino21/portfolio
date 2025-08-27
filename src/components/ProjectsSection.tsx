import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const project = {
    title: "Fortuno",
    description: "A personal finance app that let's users keep track of their net worth through data from banks, crypto and more.",
    technologies: ["React", "Next.js", "TypeScript", "Supabase",],
    github: "https://github.com/maggerino21/fortuno",
    image: "/fortunomarketing.png"
  };

  return (
    <div className="min-h-screen bg-gray-900/30 py-16">
      <h6>Projects</h6>
      
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center">
          <div className="mb-6">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full max-w-2xl mx-auto rounded-lg border border-gray-700"
            />
          </div>

          <h3 className="mb-4 inline-block">
            {project.title}
          </h3>

          <div className="mb-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          <p className="text-gray-300 font-mono max-w-2xl mx-auto mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;