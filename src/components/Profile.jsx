import React, { useState } from 'react';

const Profile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('👧');
  const [childName, setChildName] = useState('Emma');
  const [favoriteColor, setFavoriteColor] = useState('pink');

  const avatars = ['👧', '👦', '🧒', '👶', '🦄', '🐻', '🦊', '🐱', '🐶', '🐸'];
  const colors = [
    { name: 'pink', value: 'bg-pink-500', emoji: '🌸' },
    { name: 'blue', value: 'bg-blue-500', emoji: '💙' },
    { name: 'purple', value: 'bg-purple-500', emoji: '💜' },
    { name: 'green', value: 'bg-green-500', emoji: '💚' },
    { name: 'yellow', value: 'bg-yellow-500', emoji: '💛' },
    { name: 'red', value: 'bg-red-500', emoji: '❤️' }
  ];

  const achievements = [
    { name: 'First Day!', emoji: '🌟', date: 'Jan 1, 2024' },
    { name: 'Reading Star', emoji: '📚', date: 'Jan 15, 2024' },
    { name: 'Math Wizard', emoji: '🔢', date: 'Feb 1, 2024' },
    { name: 'Art Master', emoji: '🎨', date: 'Feb 20, 2024' },
  ];

  const interests = [
    { name: 'Animals', emoji: '🐾', selected: true },
    { name: 'Colors', emoji: '🌈', selected: true },
    { name: 'Music', emoji: '🎵', selected: false },
    { name: 'Numbers', emoji: '🔢', selected: true },
    { name: 'Stories', emoji: '📖', selected: true },
    { name: 'Games', emoji: '🎮', selected: false }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left">
          <span className="text-5xl lg:text-6xl animate-bounce">{selectedAvatar}</span>
          {childName}'s Profile
        </h1>
        <p className="text-lg lg:text-2xl opacity-90 text-center lg:text-left">Make your profile special and unique!</p>
      </div>

      {/* Profile Customization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Avatar Selection */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-purple-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
            <span className="text-3xl lg:text-4xl animate-bounce">👤</span>
            Choose Your Avatar
          </h2>
          <div className="grid grid-cols-5 gap-2 lg:gap-4 mb-4 lg:mb-6">
            {avatars.map((avatar, index) => (
              <button
                key={index}
                onClick={() => setSelectedAvatar(avatar)}
                className={`text-4xl lg:text-6xl p-2 lg:p-4 rounded-xl lg:rounded-2xl border-2 lg:border-4 transition-all duration-300 transform hover:scale-110 ${
                  selectedAvatar === avatar
                    ? 'border-purple-500 bg-purple-100 animate-bounce'
                    : 'border-gray-300 bg-gray-50 hover:border-purple-300'
                }`}
              >
                {avatar}
              </button>
            ))}
          </div>
          <div className="text-center">
            <div className="text-6xl lg:text-8xl animate-pulse mb-3 lg:mb-4">{selectedAvatar}</div>
            <p className="text-lg lg:text-xl font-bold text-gray-700">That's You!</p>
          </div>
        </div>

        {/* Name & Settings */}
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-blue-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
            <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '3s' }}>⚙️</span>
            Your Settings
          </h2>
          
          <div className="space-y-4 lg:space-y-6">
            <div>
              <label className="text-lg lg:text-xl font-bold text-gray-700 mb-2 lg:mb-3 block text-center lg:text-left">Your Name</label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                className="w-full p-3 lg:p-4 text-lg lg:text-2xl font-bold border-2 lg:border-4 border-gray-300 rounded-xl lg:rounded-2xl focus:border-blue-500 focus:outline-none text-center lg:text-left"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="text-lg lg:text-xl font-bold text-gray-700 mb-2 lg:mb-3 block text-center lg:text-left">Favorite Color</label>
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setFavoriteColor(color.name)}
                    className={`${color.value} p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 lg:border-4 transition-all duration-300 transform hover:scale-110 ${
                      favoriteColor === color.name
                        ? 'border-gray-800 animate-pulse'
                        : 'border-gray-300'
                    }`}
                  >
                    <span className="text-2xl lg:text-3xl">{color.emoji}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Progress */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-yellow-300">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-bounce">📊</span>
          Your Amazing Stats
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border-2 lg:border-3 border-orange-200">
            <div className="text-4xl lg:text-5xl animate-spin mb-2 lg:mb-3" style={{ animationDuration: '4s' }}>🌟</div>
            <h3 className="text-base lg:text-xl font-bold text-gray-800">Stars Earned</h3>
            <p className="text-2xl lg:text-3xl font-bold text-orange-600">127</p>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border-2 lg:border-3 border-orange-200">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">📚</div>
            <h3 className="text-base lg:text-xl font-bold text-gray-800">Lessons Done</h3>
            <p className="text-2xl lg:text-3xl font-bold text-orange-600">24</p>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border-2 lg:border-3 border-orange-200">
            <div className="text-4xl lg:text-5xl animate-pulse mb-2 lg:mb-3">🔥</div>
            <h3 className="text-base lg:text-xl font-bold text-gray-800">Day Streak</h3>
            <p className="text-2xl lg:text-3xl font-bold text-orange-600">7</p>
          </div>
          <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border-2 lg:border-3 border-orange-200">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">🏆</div>
            <h3 className="text-base lg:text-xl font-bold text-gray-800">Level</h3>
            <p className="text-lg lg:text-2xl font-bold text-orange-600">Beginner</p>
          </div>
        </div>
      </div>

      {/* Achievements Timeline */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-green-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-pulse">🏅</span>
          Your Achievement Journey
        </h2>
        <div className="space-y-3 lg:space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 bg-green-50 p-4 lg:p-6 rounded-xl lg:rounded-2xl border-2 lg:border-3 border-green-200">
              <div className="text-5xl lg:text-6xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                {achievement.emoji}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg lg:text-2xl font-bold text-gray-800">{achievement.name}</h3>
                <p className="text-base lg:text-lg text-gray-600">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-red-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '2s' }}>❤️</span>
          What You Love Learning
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className={`p-4 lg:p-6 rounded-xl lg:rounded-2xl border-2 lg:border-4 text-center transition-all duration-300 transform hover:scale-105 ${
                interest.selected 
                  ? 'bg-red-100 border-red-400' 
                  : 'bg-gray-100 border-gray-300'
              }`}
            >
              <div className={`text-4xl lg:text-5xl mb-2 lg:mb-3 ${interest.selected ? 'animate-bounce' : 'opacity-50'}`}>
                {interest.emoji}
              </div>
              <h3 className={`text-base lg:text-xl font-bold ${interest.selected ? 'text-red-600' : 'text-gray-500'}`}>
                {interest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;