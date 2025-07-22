import React, { useState, useEffect } from 'react';

interface AIFriendProps {
  onChatOpen: () => void;
}

const AIFriend: React.FC<AIFriendProps> = ({ onChatOpen }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [showThought, setShowThought] = useState(false);
  const [currentThought, setCurrentThought] = useState('');
  const [isWalking, setIsWalking] = useState(false);

  const thoughts = [
    "Let's learn something new today! 🎉",
    "You're doing amazing! Keep it up! ⭐",
    "Want to play a fun game? 🎮",
    "I'm here to help you learn! 💡",
    "Great job on your progress! 🏆"
  ];

  useEffect(() => {
    // Random walk animation
    const walkInterval = setInterval(() => {
      setIsWalking(true);
      const newX = Math.random() * 80 + 10; // Keep within bounds
      const newY = Math.random() * 70 + 15;
      setPosition({ x: newX, y: newY });
      
      setTimeout(() => setIsWalking(false), 2000);
    }, 8000);

    // Random thoughts
    const thoughtInterval = setInterval(() => {
      const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
      setCurrentThought(randomThought);
      setShowThought(true);
      
      setTimeout(() => setShowThought(false), 4000);
    }, 12000);

    return () => {
      clearInterval(walkInterval);
      clearInterval(thoughtInterval);
    };
  }, []);

  return (
    <div 
      className="fixed z-20 transition-all duration-2000 ease-in-out cursor-pointer"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onClick={onChatOpen}
    >
      {/* Thought Bubble */}
      {showThought && (
        <div className="absolute -top-16 -left-8 bg-white rounded-xl p-3 shadow-lg border-2 border-pink-200 min-w-[200px] animate-bounce">
          <div className="text-sm font-medium text-gray-700">{currentThought}</div>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r-2 border-b-2 border-pink-200 rotate-45"></div>
        </div>
      )}
      
      {/* AI Character */}
      <div className={`relative ${isWalking ? 'animate-bounce' : 'animate-pulse'}`}>
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <span className="text-2xl">🤖</span>
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default AIFriend;