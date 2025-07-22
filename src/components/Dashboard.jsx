import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Learning Streak', value: '7 Days', icon: '🔥', color: 'bg-orange-100 border-orange-300 text-orange-800' },
    { title: 'Stars Earned', value: '45', icon: '⭐', color: 'bg-yellow-100 border-yellow-300 text-yellow-800' },
    { title: 'Lessons Done', value: '12', icon: '📖', color: 'bg-blue-100 border-blue-300 text-blue-800' },
    { title: 'Level', value: 'Beginner', icon: '🏆', color: 'bg-green-100 border-green-300 text-green-800' },
  ];

  const activities = [
    { title: 'ABC Learning', progress: 85, emoji: '🔤', color: 'bg-red-500' },
    { title: 'Number Games', progress: 60, emoji: '🔢', color: 'bg-blue-500' },
    { title: 'Shape Explorer', progress: 90, emoji: '🟡', color: 'bg-yellow-500' },
    { title: 'Color Magic', progress: 75, emoji: '🌈', color: 'bg-purple-500' },
  ];

  const achievements = [
    { title: 'First Steps', emoji: '👶', unlocked: true },
    { title: 'ABC Master', emoji: '📝', unlocked: true },
    { title: 'Number Pro', emoji: '🧮', unlocked: false },
    { title: 'Shape Hero', emoji: '🎯', unlocked: true },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 text-center lg:text-left">Welcome back, Emma! 👋</h1>
            <p className="text-lg lg:text-2xl opacity-90 text-center lg:text-left">Ready for another fun day of learning?</p>
          </div>
          <div className="text-6xl lg:text-8xl animate-bounce">🎈</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} border-2 lg:border-4 rounded-2xl lg:rounded-3xl p-4 lg:p-6 transform hover:scale-105 transition-all duration-300 shadow-lg`}>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl mb-2 lg:mb-3 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
              </div>
              <h3 className="font-bold text-sm lg:text-lg mb-1 lg:mb-2">{stat.title}</h3>
              <p className="text-xl lg:text-3xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learning Activities */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-red-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '3s' }}>📚</span>
          Today's Learning Activities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                <div className="text-4xl lg:text-5xl animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>
                  {activity.emoji}
                </div>
                <h3 className="text-lg lg:text-2xl font-bold text-gray-800 text-center sm:text-left">{activity.title}</h3>
              </div>
              <div className="mb-3 lg:mb-4">
                <div className="flex justify-between text-base lg:text-lg font-semibold text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{activity.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 lg:h-4">
                  <div 
                    className={`${activity.color} h-3 lg:h-4 rounded-full transition-all duration-1000 animate-pulse`}
                    style={{ width: `${activity.progress}%` }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 text-base lg:text-lg">
                Continue Learning! 🚀
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-yellow-300">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-bounce">🏆</span>
          Your Amazing Achievements
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 lg:p-6 rounded-xl lg:rounded-2xl text-center border-2 lg:border-3 transition-all duration-300 ${
                achievement.unlocked 
                  ? 'bg-white border-green-300 shadow-lg transform hover:scale-105' 
                  : 'bg-gray-100 border-gray-300 opacity-50'
              }`}
            >
              <div className={`text-4xl lg:text-6xl mb-2 lg:mb-3 ${achievement.unlocked ? 'animate-bounce' : 'grayscale'}`}>
                {achievement.emoji}
              </div>
              <h3 className={`font-bold text-sm lg:text-lg ${achievement.unlocked ? 'text-green-600' : 'text-gray-500'}`}>
                {achievement.title}
              </h3>
              {achievement.unlocked && <div className="text-xs lg:text-sm text-green-500 font-bold mt-1 lg:mt-2">UNLOCKED! 🎉</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;