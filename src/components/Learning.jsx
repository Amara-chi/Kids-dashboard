import React, { useState } from 'react';

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 const platforms = [
  {
    name: 'Quizizz',
    description: 'Join interactive quizzes',
    emoji: '🧩',
    color: 'bg-purple-500',
    category: 'quiz',
    embedUrl: 'https://quizizz.com',
    apiEndpoint: null,
    subjects: ['All Subjects', 'Games']
  },
  {
    name: 'Scratch',
    description: 'Learn coding with colorful blocks!',
    emoji: '💻',
    color: 'bg-orange-500',
    category: 'coding',
    embedUrl: 'https://scratch.mit.edu/projects/10128407/embed',
    apiEndpoint: 'https://api.scratch.mit.edu/projects',
    subjects: ['Coding', 'Logic', 'Creativity']
  },
  {
    name: 'Toca Boca',
    description: 'Creative play and exploration games!',
    emoji: '🎨',
    color: 'bg-pink-500',
    category: 'creative',
    embedUrl: 'https://tocaboca.com',
    apiEndpoint: null,
    subjects: ['Creativity', 'Imagination']
  }
];


  const localActivities = [
    {
      title: 'ABC Tracing Game',
      description: 'Practice writing letters with fun animations!',
      emoji: '✏️',
      color: 'bg-yellow-500',
      difficulty: 'Easy'
    },
    {
      title: 'Number Matching',
      description: 'Match numbers with fun objects!',
      emoji: '🔢',
      color: 'bg-blue-500',
      difficulty: 'Easy'
    },
    {
      title: 'Color Mixing Lab',
      description: 'Mix colors and see what happens!',
      emoji: '🎨',
      color: 'bg-purple-500',
      difficulty: 'Medium'
    },
    {
      title: 'Shape Puzzle',
      description: 'Fit shapes into the right places!',
      emoji: '🧩',
      color: 'bg-green-500',
      difficulty: 'Medium'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Activities', emoji: '🌈' },
    { id: 'quiz', name: 'Quizzes', emoji: '❓' },
    { id: 'creative', name: 'Creative', emoji: '🎨' },
    { id: 'coding', name: 'Coding', emoji: '💻' },
  ];

  const filteredPlatforms = selectedCategory === 'all' 
    ? platforms 
    : platforms.filter(platform => platform.category === selectedCategory);

  const handlePlatformClick = async (platform) => {
    setIsLoading(true);
    setSelectedPlatform(platform);
    
    // Fetch API data if available
    if (platform.apiEndpoint) {
      try {
        const response = await fetch(platform.apiEndpoint);
        const data = await response.json();
        console.log(`${platform.name} API Data:`, data);
      } catch (error) {
        console.log(`${platform.name} API not accessible:`, error);
      }
    }
    
    setIsLoading(false);
  };

  const closePlatform = () => {
    setSelectedPlatform(null);
  };

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
      {/* Embedded Platform Modal */}
      {selectedPlatform && (
        <div className="fixed inset-0 lg:ml-64 bg-black/80 flex items-center justify-center z-50 p-2 lg:p-4">
          <div className="bg-white rounded-2xl lg:rounded-3xl w-full h-full max-w-7xl max-h-[95vh] lg:max-h-[90vh] flex flex-col shadow-2xl border-2 lg:border-4 border-red-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-t-xl lg:rounded-t-2xl p-4 lg:p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="text-3xl lg:text-4xl animate-bounce">{selectedPlatform.emoji}</div>
                <div>
                  <h3 className="text-lg lg:text-2xl font-bold">{selectedPlatform.name}</h3>
                  <p className="text-red-100 text-sm lg:text-base hidden sm:block">{selectedPlatform.description}</p>
                </div>
              </div>
              <button
                onClick={closePlatform}
                className="bg-white/20 hover:bg-white/30 p-2 lg:p-3 rounded-full transition-all duration-300 text-xl lg:text-2xl"
              >
                ✕
              </button>
            </div>
            
            {/* Embedded Content */}
            <div className="flex-1 p-2 lg:p-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-4xl lg:text-6xl animate-spin mb-4">🎮</div>
                    <p className="text-lg lg:text-2xl font-bold text-gray-600">Loading your learning adventure...</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={selectedPlatform.embedUrl}
                  className="w-full h-full rounded-xl lg:rounded-2xl border-2 lg:border-4 border-gray-200"
                  title={selectedPlatform.name}
                  allow="camera; microphone; fullscreen; display-capture"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left">
          <span className="text-5xl lg:text-6xl animate-bounce">🚀</span>
          Let's Learn & Play!
        </h1>
        <p className="text-lg lg:text-2xl opacity-90 text-center lg:text-left">Choose your favorite learning adventure!</p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl border-2 lg:border-4 border-blue-200">
        <h2 className="text-xl lg:text-2xl font-bold text-blue-600 mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3 justify-center lg:justify-start">
          <span className="text-2xl lg:text-3xl">🎯</span>
          Choose Your Adventure
        </h2>
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 lg:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center justify-center gap-1 lg:gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold text-sm lg:text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg lg:text-2xl">{category.emoji}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* External Learning Platforms */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-red-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '3s' }}>🌍</span>
          Learning Platforms
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {filteredPlatforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handlePlatformClick(platform)}
            >
              <div className="text-center mb-3 lg:mb-4">
                <div className="text-5xl lg:text-6xl animate-bounce mb-2 lg:mb-3" style={{ animationDelay: `${index * 0.2}s` }}>
                  {platform.emoji}
                </div>
                <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-1 lg:mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm lg:text-lg">{platform.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-1 lg:gap-2 mb-3 lg:mb-4 justify-center">
                {platform.subjects.map((subject, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold">
                    {subject}
                  </span>
                ))}
              </div>
              
              <button className={`w-full ${platform.color} hover:opacity-90 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 text-sm lg:text-lg`}>
                Open Learning Platform! 🎉
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Local Activities */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-yellow-300">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-pulse">🎮</span>
          Fun Activities Just For You!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {localActivities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="text-4xl lg:text-5xl animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                  {activity.emoji}
                </div>
                <div>
                  <h3 className="text-lg lg:text-2xl font-bold text-gray-800 text-center sm:text-left">{activity.title}</h3>
                  <span className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold ${
                    activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.difficulty}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-lg mb-3 lg:mb-4 text-center sm:text-left">{activity.description}</p>
              <button className={`w-full ${activity.color} hover:opacity-90 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 text-sm lg:text-lg`}>
                Play Now! 🚀
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;