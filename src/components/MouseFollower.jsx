import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkle effect
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 30,
        y: e.clientY + (Math.random() - 0.5) * 30,
        emoji: Math.random() > 0.7 ? '🌟' : '✨'
      };
      
      setSparkles(prev => [...prev.slice(-8), newSparkle]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles(prev => prev.slice(1));
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 hidden sm:block">
      {sparkles.map((sparkle, index) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-400 animate-ping text-sm lg:text-base"
          style={{
            left: sparkle.x - 8,
            top: sparkle.y - 8,
            opacity: Math.max(0.3, 1 - (index * 0.15)),
            fontSize: Math.random() > 0.5 ? '14px' : '10px'
          }}
        >
          {sparkle.emoji}
        </div>
      ))}
    </div>
  );
};

export default MouseFollower;