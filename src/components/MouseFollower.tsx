import React, { useState, useEffect } from 'react';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkle effect
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20
      };
      
      setSparkles(prev => [...prev.slice(-5), newSparkle]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles(prev => prev.slice(1));
    }, 200);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {sparkles.map((sparkle, index) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-400 animate-ping"
          style={{
            left: sparkle.x - 8,
            top: sparkle.y - 8,
            opacity: 1 - (index * 0.2)
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default MouseFollower;