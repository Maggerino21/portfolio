import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Code, Brain, Palette, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedContent: string;
  defaultPosition: {
    x: number;
    y: number;
  };
}

const AboutSection: React.FC = () => {
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});
  const [zIndexes, setZIndexes] = useState<{ [key: number]: number }>({
    0: 1, 1: 1, 2: 1, 3: 1
  });
  const [currentMaxZ, setCurrentMaxZ] = useState(1);

  const bringToFront = (index: number) => {
    const newZ = currentMaxZ + 1;
    setZIndexes(prev => ({
      ...prev,
      [index]: newZ
    }));
    setCurrentMaxZ(newZ);
  };

  const toggleExpand = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    bringToFront(index);
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleDragStart = (index: number) => {
    bringToFront(index);
  };

  const cards: CardData[] = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern technologies",
      expandedContent: "Experienced in React, Next.js, Node.js, and various databases. I focus on creating scalable and maintainable applications with clean architectures and modern best practices.",
      defaultPosition: { x: 50, y: 5 }
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Exploring ML algorithms and practical applications",
      expandedContent: "Working with PyTorch and TensorFlow to develop and implement machine learning models. Particularly interested in computer vision and natural language processing applications.",
      defaultPosition: { x: 400, y: 50 }
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      description: "Creating intuitive and aesthetic user interfaces",
      expandedContent: "Combining principles of user experience with modern design trends. Proficient in tools like Figma and experienced in implementing responsive, accessible designs.",
      defaultPosition: { x: 750, y: 5 }
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Multiple programming languages and modern tools",
      expandedContent: "Proficient in JavaScript/TypeScript, Python, and various frameworks. Strong foundation in algorithms, data structures, and software design patterns.",
      defaultPosition: { x: 1100, y: 50 }
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900/30">
      <h2 className="text-4xl font-mono text-center pt-8 mb-16">About Me</h2>
      
      {cards.map((card, index) => (
        <Draggable
          key={index}
          defaultPosition={card.defaultPosition}
          bounds="parent"
          handle=".handle"
          onStart={() => handleDragStart(index)}
        >
          <div 
            className="absolute w-72 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden shadow-lg"
            style={{ zIndex: zIndexes[index] }}
            onClick={() => bringToFront(index)}
          >
            <div className="handle p-4 bg-gray-700/50 flex items-center space-x-3 cursor-move">
              <div className="text-blue-400">
                {card.icon}
              </div>
              <h3 className="text-xl font-mono">{card.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-300">{card.description}</p>
            </div>
            <div 
              className="px-4 pb-4 cursor-pointer flex items-center justify-center text-gray-400 hover:text-gray-200"
              onClick={(e) => toggleExpand(index, e)}
            >
              {expandedStates[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedStates[index] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                <p className="text-gray-300">{card.expandedContent}</p>
              </div>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default AboutSection;