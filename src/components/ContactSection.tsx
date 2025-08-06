import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900/30 flex flex-col items-center justify-center text-center px-4">
      <h6> Let's Connect!</h6>
      
      <p className="text-gray-400 max-w-2xl mb-12 font-mono">
        Curious to know more about me, who i am and what i do? Or do you just wanna have a chat about tech, sports or anything else?
        Get in touch! Be sure to check out my GitHub to see more of what i'm working on.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="mailto:engan99@icloud.com"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <Mail className="w-5 h-5" />
          <span className="font-mono">Email</span>
        </a>

        <a 
          href="https://github.com/maggerino21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <Github className="w-5 h-5" />
          <span className="font-mono">GitHub</span>
        </a>

        <a 
          href="https://linkedin.com/in/magne-johannes-engan-6b4144291"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <Linkedin className="w-5 h-5" />
          <span className="font-mono">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;