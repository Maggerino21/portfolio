import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Palette, ChevronDown, ChevronUp, CircleUserRound, Hammer, Volleyball, Braces } from 'lucide-react';

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

// Helper function to format text with colored first words
const formatExpandedContent = (text: string) => {
  // Split the text into sentences
  const sentences = text.split(/(?<=\.) /).filter(Boolean);
  
  return sentences.map((sentence, index) => {
    // Split each sentence into first word and rest
    const [firstWord, ...rest] = sentence.split(/\s+/);
    
    return (
      <React.Fragment key={index}>
        <span className="text-blue-400">{firstWord}</span>
        {rest.length > 0 && ' ' + rest.join(' ')}
        {index < sentences.length - 1 && ' '}
      </React.Fragment>
    );
  });
};

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
    event.stopPropagation(); // Prevent event from bubbling up to draggable
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
      icon: <CircleUserRound className="w-6 h-6" />,
      title: "Who am i?",
      description: "A full stack developer with a passion for building and learning!",
      expandedContent: "I am 26 year old developer that loves to learn new things.",
      defaultPosition: { x: 50, y: 5 }
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "What am i working on?",
      description: "Exploring ML algorithms and practical applications",
      expandedContent: "Working with PyTorch and TensorFlow to develop and implement machine learning models. Particularly interested in computer vision and natural language processing applications.",
      defaultPosition: { x: 400, y: 50 }
    },
    {
      icon: <Braces className="w-6 h-6" />,
      title: "Technologies i know",
      description: "Creating intuitive and aesthetic user interfaces",
      expandedContent: "Combining principles of user experience with modern design trends. Proficient in tools like Figma and experienced in implementing responsive, accessible designs.",
      defaultPosition: { x: 750, y: 5 }
    },
    {
      icon: <Volleyball className="w-6 h-6" />,
      title: "Other Hobbies",
      description: "Multiple programming languages and modern tools",
      expandedContent: "Proficient in JavaScript/TypeScript, Python, and various frameworks. Strong foundation in algorithms, data structures, and software design patterns.",
      defaultPosition: { x: 1100, y: 50 }
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900/30">
      <h6>About me</h6>
      
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
                <p className="text-gray-300">
                  {formatExpandedContent(card.expandedContent)}
                </p>
              </div>
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default AboutSection;