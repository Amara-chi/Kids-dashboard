import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
      {/* Floating Stars */}
      <div className="absolute animate-bounce" style={{ top: '10%', left: '15%', animationDelay: '0s', animationDuration: '4s' }}>
        <div className="text-yellow-300 text-xl lg:text-2xl">⭐</div>
      </div>
      <div className="absolute animate-bounce" style={{ top: '60%', left: '80%', animationDelay: '1s', animationDuration: '3s' }}>
        <div className="text-yellow-400 text-2xl lg:text-3xl">✨</div>
      </div>
      <div className="absolute animate-bounce" style={{ top: '30%', left: '70%', animationDelay: '2s', animationDuration: '5s' }}>
        <div className="text-yellow-300 text-lg lg:text-xl">⭐</div>
      </div>
      <div className="absolute animate-bounce" style={{ top: '80%', left: '20%', animationDelay: '3s', animationDuration: '6s' }}>
        <div className="text-yellow-200 text-xl lg:text-2xl">🌟</div>
      </div>

      {/* Floating Clouds */}
      <div className="absolute animate-pulse" style={{ top: '20%', left: '5%', animationDelay: '0s' }}>
        <div className="text-white/70 text-3xl lg:text-4xl">☁️</div>
      </div>
      <div className="absolute animate-pulse" style={{ top: '70%', left: '90%', animationDelay: '3s' }}>
        <div className="text-white/60 text-2xl lg:text-3xl">☁️</div>
      </div>
      <div className="absolute animate-pulse" style={{ top: '40%', left: '85%', animationDelay: '5s' }}>
        <div className="text-white/50 text-xl lg:text-2xl">☁️</div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute animate-pulse" style={{ top: '50%', left: '10%', animationDelay: '1s' }}>
        <div className="text-pink-400 text-xl lg:text-2xl">💖</div>
      </div>
      <div className="absolute animate-pulse" style={{ top: '25%', left: '60%', animationDelay: '4s' }}>
        <div className="text-red-400 text-lg lg:text-xl">❤️</div>
      </div>
      <div className="absolute animate-pulse" style={{ top: '75%', left: '50%', animationDelay: '6s' }}>
        <div className="text-pink-300 text-2xl lg:text-3xl">💕</div>
      </div>

      {/* Rainbow and Fun Elements */}
      <div className="absolute animate-bounce" style={{ top: '15%', left: '85%', animationDelay: '2s' }}>
        <div className="text-2xl lg:text-3xl">🌈</div>
      </div>
      <div className="absolute animate-spin" style={{ top: '65%', left: '75%', animationDelay: '1s', animationDuration: '8s' }}>
        <div className="text-xl lg:text-2xl">🎈</div>
      </div>
      <div className="absolute animate-bounce" style={{ top: '35%', left: '25%', animationDelay: '4s' }}>
        <div className="text-xl lg:text-2xl">🦋</div>
      </div>

      {/* Floating Ribbons Effect */}
      <div className="absolute w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent animate-pulse" style={{ top: '30%', animationDelay: '2s' }}></div>
      <div className="absolute w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse" style={{ top: '60%', animationDelay: '4s' }}></div>
      <div className="absolute w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-pulse" style={{ top: '80%', animationDelay: '6s' }}></div>
    </div>
  );
};

export default FloatingElements;