import React, { useState, useEffect, useRef } from 'react';

const AIFriend = ({ onChatOpen }) => {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [showThought, setShowThought] = useState(false);
  const [currentThought, setCurrentThought] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const aiRef = useRef(null);

  const thoughts = [
    "Let's learn something new today! 🎉",
    "You're doing amazing! Keep it up! ⭐",
    "Want to play a fun game? 🎮",
    "I'm here to help you learn! 💡",
    "Great job on your progress! 🏆",
    "Ready for another adventure? 🚀",
    "You're so smart! 🧠✨",
    "Let's count to 10 together! 🔢"
  ];

  useEffect(() => {
    // Set initial position to bottom right on large screens
    const updatePosition = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setPosition({
          x: window.innerWidth - 120,
          y: window.innerHeight - 120
        });
      } else {
        setPosition({
          x: Math.min(100, window.innerWidth - 80),
          y: Math.min(100, window.innerHeight - 80)
        });
      }
    };

    // Set initial position
    updatePosition();

    // Update position on window resize
    window.addEventListener('resize', updatePosition);

    // Random thoughts
    const thoughtInterval = setInterval(() => {
      const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
      setCurrentThought(randomThought);
      setShowThought(true);
      
      setTimeout(() => setShowThought(false), 5000);
    }, 15000);

    // Initial thought
    setTimeout(() => {
      setCurrentThought(thoughts[0]);
      setShowThought(true);
      setTimeout(() => setShowThought(false), 4000);
    }, 2000);

    return () => {
      clearInterval(thoughtInterval);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  // Mouse event handlers for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = aiRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);
  return (
    <div 
      ref={aiRef}
      className={`fixed z-20 cursor-${isDragging ? 'grabbing' : 'grab'} select-none transition-transform duration-200`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`
      }}
      onMouseDown={handleMouseDown}
      onClick={(e) => {
        if (!isDragging) {
          onChatOpen();
        }
      }}
    >
      {/* Thought Bubble */}
      {showThought && (
        <div className="absolute -top-16 lg:-top-20 -left-8 lg:-left-12 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl border-2 border-pink-200 min-w-[180px] lg:min-w-[220px] animate-bounce z-30 pointer-events-none">
          <div className="text-xs lg:text-sm font-bold text-gray-700 text-center">{currentThought}</div>
          <div className="absolute -bottom-2 lg:-bottom-3 left-6 lg:left-8 w-4 h-4 lg:w-6 lg:h-6 bg-white border-r-2 border-b-2 border-pink-200 rotate-45"></div>
        </div>
      )}
      
      {/* AI Character */}
      <div className={`relative ${isDragging ? 'scale-110' : 'animate-pulse'} transition-transform duration-200`}>
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full border-2 lg:border-4 border-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <span className="text-2xl lg:text-3xl animate-pulse">🤖</span>
        </div>
        <div className="absolute -bottom-1 lg:-bottom-2 left-1/2 transform -translate-x-1/2 w-8 lg:w-10 h-2 lg:h-3 bg-black/20 rounded-full animate-pulse"></div>
        
        {/* Floating heart effect around character */}
        <div className="absolute -top-1 lg:-top-2 -right-1 lg:-right-2 text-pink-400 text-xs lg:text-sm animate-ping">💖</div>
        
        {/* Drag indicator */}
        {isDragging && (
          <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-xs">Dragging...</div>
        )}
      </div>
    </div>
  );
};

export default AIFriend;