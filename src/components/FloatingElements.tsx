import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Stars */}
      <div className="absolute animate-bounce-slow" style={{ top: '10%', left: '15%', animationDelay: '0s', animationDuration: '4s' }}>
        <div className="text-yellow-300 text-2xl">⭐</div>
      </div>
      <div className="absolute animate-bounce-slow" style={{ top: '60%', left: '80%', animationDelay: '1s', animationDuration: '3s' }}>
        <div className="text-yellow-400 text-3xl">✨</div>
      </div>
      <div className="absolute animate-bounce-slow" style={{ top: '30%', left: '70%', animationDelay: '2s', animationDuration: '5s' }}>
        <div className="text-yellow-300 text-xl">⭐</div>
      </div>

      {/* Floating Clouds */}
      <div className="absolute animate-float" style={{ top: '20%', left: '5%', animationDelay: '0s' }}>
        <div className="text-white/70 text-4xl">☁️</div>
      </div>
      <div className="absolute animate-float" style={{ top: '70%', left: '90%', animationDelay: '3s' }}>
        <div className="text-white/60 text-3xl">☁️</div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute animate-pulse" style={{ top: '50%', left: '10%', animationDelay: '1s' }}>
        <div className="text-pink-400 text-2xl">💖</div>
      </div>
      <div className="absolute animate-pulse" style={{ top: '80%', left: '60%', animationDelay: '4s' }}>
        <div className="text-red-400 text-xl">❤️</div>
      </div>

      {/* Rainbow */}
      <div className="absolute animate-pulse" style={{ top: '15%', left: '85%', animationDelay: '2s' }}>
        <div className="text-3xl">🌈</div>
      </div>
    </div>
  );
};

export default FloatingElements;