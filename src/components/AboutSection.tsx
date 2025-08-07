import React, { useState } from 'react';
import { CircleUserRound, Hammer, Volleyball, Braces } from 'lucide-react';

interface QuadrantData {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedContent: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const AboutSection: React.FC = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<string | null>(null);

  const quadrants: QuadrantData[] = [
    {
      icon: <CircleUserRound className="w-8 h-8" />,
      title: "Who am i?",
      description: "A full stack developer with a passion for building and learning!",
      expandedContent: "I am 26 year old developer that loves to learn new things. Currently based in Norway, I'm constantly exploring new technologies and pushing my boundaries in both frontend and backend development.",
      position: 'top-left'
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "What am i working on?",
      description: "Exploring ML algorithms and practical applications",
      expandedContent: "I work full time as a developer for an aquaculture company. In my free time i am building Fortuno, a personal finance app. I am also trying to learn more about machine learning and coding AI.",
      position: 'top-right'
    },
    {
      icon: <Braces className="w-8 h-8" />,
      title: "Technologies i know",
      description: "Modern tech stack and tools",
      expandedContent: "Proficient in JavaScript/TypeScript, Python, React, Next.js, Node.js, and various databases. Strong foundation in algorithms, data structures, and software design patterns. Experience with cloud platforms and DevOps.",
      position: 'bottom-left'
    },
    {
      icon: <Volleyball className="w-8 h-8" />,
      title: "Other Hobbies",
      description: "Life beyond the code",
      expandedContent: "My biggest passion outside coding is football. I also work out and love to run. I also enjoy hiking in the Norwegian nature when the weather allows it.",
      position: 'bottom-right'
    }
  ];

  const getQuadrantClasses = (position: string) => {
    const baseClasses = "absolute w-1/2 h-1/2 border-gray-700 flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden";
    
    switch(position) {
      case 'top-left':
        return `${baseClasses} top-0 left-0 border-r border-b`;
      case 'top-right':
        return `${baseClasses} top-0 right-0 border-l border-b`;
      case 'bottom-left':
        return `${baseClasses} bottom-0 left-0 border-r border-t`;
      case 'bottom-right':
        return `${baseClasses} bottom-0 right-0 border-l border-t`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900/30 flex flex-col">
      <h6 className="text-4xl font-mono text-center py-8 text-gray-200">About me</h6>
      
      <div className="relative flex-1 max-w-7xl mx-auto w-full">
        {quadrants.map((quadrant, index) => (
          <div
            key={index}
            className={getQuadrantClasses(quadrant.position)}
            onMouseEnter={() => setHoveredQuadrant(quadrant.position)}
            onMouseLeave={() => setHoveredQuadrant(null)}
            style={{
              background: hoveredQuadrant === quadrant.position 
                ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                : 'transparent'
            }}
          >
            {/* Default State - Icon and Title */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
                hoveredQuadrant === quadrant.position ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="text-blue-400 mb-4">
                {quadrant.icon}
              </div>
              <h3 className="text-xl font-mono text-gray-300 text-center mb-2">
                {quadrant.title}
              </h3>
              <p className="text-sm text-gray-500 text-center max-w-xs">
                {quadrant.description}
              </p>
            </div>

            {/* Hovered State - Expanded Content */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                hoveredQuadrant === quadrant.position 
                  ? 'opacity-100 transform scale-100' 
                  : 'opacity-0 transform scale-95 pointer-events-none'
              }`}
            >
              <div className="text-blue-400 mb-4 transform transition-transform duration-500"
                style={{
                  transform: hoveredQuadrant === quadrant.position ? 'scale(1.2)' : 'scale(1)'
                }}
              >
                {quadrant.icon}
              </div>
              <h3 className="text-2xl font-mono text-white mb-4 text-center">
                {quadrant.title}
              </h3>
              <p className="text-gray-300 text-center max-w-md leading-relaxed">
                {quadrant.expandedContent}
              </p>
            </div>

            {/* Hover Indicator */}
            <div 
              className={`absolute inset-0 border-2 transition-all duration-500 pointer-events-none ${
                hoveredQuadrant === quadrant.position 
                  ? 'border-blue-500/50' 
                  : 'border-transparent'
              }`}
            />
          </div>
        ))}

        {/* Center Lines - Visual Dividers */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-700 transform -translate-x-1/2 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700 transform -translate-y-1/2 pointer-events-none" />
        
        {/* Center Circle Decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-4 h-4 bg-gray-900 border-2 border-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;