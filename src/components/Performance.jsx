import React from 'react';

const Performance = () => {
  const subjects = [
    { name: 'Letters & Phonics', score: 85, emoji: '🔤', color: 'bg-red-500', stars: 4 },
    { name: 'Numbers & Counting', score: 72, emoji: '🔢', color: 'bg-blue-500', stars: 3 },
    { name: 'Shapes & Colors', score: 94, emoji: '🌈', color: 'bg-purple-500', stars: 5 },
    { name: 'Arts & Creativity', score: 88, emoji: '🎨', color: 'bg-pink-500', stars: 4 },
    { name: 'Music & Rhythm', score: 76, emoji: '🎵', color: 'bg-green-500', stars: 3 },
  ];

  const badges = [
    { name: 'Reading Rookie', emoji: '📖', earned: true, description: 'Read 10 stories!' },
    { name: 'Math Magician', emoji: '🪄', earned: true, description: 'Solved 50 problems!' },
    { name: 'Color Master', emoji: '🌈', earned: true, description: 'Learned all colors!' },
    { name: 'Shape Detective', emoji: '🔍', earned: false, description: 'Find all shapes!' },
    { name: 'Creative Star', emoji: '⭐', earned: true, description: 'Made 20 artworks!' },
    { name: 'Music Mixer', emoji: '🎼', earned: false, description: 'Complete rhythm games!' },
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left">
          <span className="text-5xl lg:text-6xl animate-bounce">🏆</span>
          Your Amazing Progress!
        </h1>
        <p className="text-lg lg:text-2xl opacity-90 text-center lg:text-left">Look how much you've learned! You're a superstar! ⭐</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white text-center shadow-xl">
          <div className="text-5xl lg:text-6xl animate-bounce mb-3 lg:mb-4">📈</div>
          <h3 className="text-xl lg:text-2xl font-bold mb-2">Overall Score</h3>
          <p className="text-4xl lg:text-5xl font-bold">83%</p>
          <p className="text-lg lg:text-xl mt-2">Excellent Work!</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white text-center shadow-xl">
          <div className="text-5xl lg:text-6xl animate-spin mb-3 lg:mb-4" style={{ animationDuration: '3s' }}>🌟</div>
          <h3 className="text-xl lg:text-2xl font-bold mb-2">Total Stars</h3>
          <p className="text-4xl lg:text-5xl font-bold">127</p>
          <p className="text-lg lg:text-xl mt-2">Keep Shining!</p>
        </div>
        <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white text-center shadow-xl">
          <div className="text-5xl lg:text-6xl animate-pulse mb-3 lg:mb-4">🎯</div>
          <h3 className="text-xl lg:text-2xl font-bold mb-2">Lessons Completed</h3>
          <p className="text-4xl lg:text-5xl font-bold">24</p>
          <p className="text-lg lg:text-xl mt-2">Amazing!</p>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-red-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-6 lg:mb-8 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-bounce">📊</span>
          Subject Performance
        </h2>
        <div className="space-y-4 lg:space-y-6">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-3 lg:mb-4 gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                  <div className="text-4xl lg:text-5xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {subject.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-2xl font-bold text-gray-800 text-center sm:text-left">{subject.name}</h3>
                    <div className="flex gap-1 mt-1 justify-center sm:justify-start">
                      {renderStars(subject.stars)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl lg:text-4xl font-bold text-gray-800">{subject.score}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 lg:h-6">
                <div 
                  className={`${subject.color} h-4 lg:h-6 rounded-full transition-all duration-1000 animate-pulse flex items-center justify-end pr-2 lg:pr-3`}
                  style={{ width: `${subject.score}%` }}
                >
                  <span className="text-white font-bold text-xs lg:text-sm">{subject.score}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-blue-300">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-6 lg:mb-8 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '2s' }}>🏅</span>
          Your Achievement Badges
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className={`p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center border-2 lg:border-4 transition-all duration-300 ${
                badge.earned 
                  ? 'bg-white border-green-400 shadow-xl transform hover:scale-105' 
                  : 'bg-gray-100 border-gray-400 opacity-60'
              }`}
            >
              <div className={`text-4xl lg:text-6xl mb-2 lg:mb-3 ${badge.earned ? 'animate-bounce' : 'grayscale filter'}`}>
                {badge.emoji}
              </div>
              <h3 className={`font-bold text-sm lg:text-lg mb-1 lg:mb-2 ${badge.earned ? 'text-green-600' : 'text-gray-500'}`}>
                {badge.name}
              </h3>
              <p className={`text-xs lg:text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                {badge.description}
              </p>
              {badge.earned && (
                <div className="mt-2 lg:mt-3 bg-green-500 text-white font-bold py-1 lg:py-2 px-3 lg:px-4 rounded-full text-xs lg:text-sm animate-pulse">
                  EARNED! 🎉
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;