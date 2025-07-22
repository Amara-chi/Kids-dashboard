import React from 'react';
import { Home, BookOpen, Trophy, CreditCard, User, GraduationCap } from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange, isOpen, onToggle }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, emoji: '🏠' },
    { id: 'learning', label: 'Learning', icon: BookOpen, emoji: '📚' },
    { id: 'performance', label: 'Progress', icon: Trophy, emoji: '🏆' },
    { id: 'fees', label: 'Fees', icon: CreditCard, emoji: '💳' },
    { id: 'profile', label: 'Profile', icon: User, emoji: '👤' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-red-700 via-red-600 to-red-800 shadow-2xl z-50 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      {/* Close button for mobile */}
      <button
        onClick={onToggle}
        className="lg:hidden absolute top-4 right-4 text-white p-2 rounded-lg hover:bg-red-600"
      >
        ✕
      </button>
      
      {/* School Logo */}
      <div className="p-4 lg:p-6 border-b border-red-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center animate-pulse">
            <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-white font-bold text-base lg:text-lg">Sunny Kids</h1>
            <p className="text-red-200 text-xs lg:text-sm">Learning Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 lg:p-4 space-y-2 lg:space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSectionChange(item.id);
              onToggle && onToggle();
            }}
            className={`w-full flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl transition-all duration-300 text-left ${
              activeSection === item.id
                ? 'bg-white text-red-600 shadow-lg transform scale-105'
                : 'text-white hover:bg-red-600/50 hover:transform hover:scale-105'
            }`}
          >
            <span className="text-2xl lg:text-3xl animate-bounce" style={{ animationDelay: `${Math.random()}s` }}>
              {item.emoji}
            </span>
            <span className="font-bold text-base lg:text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Fun decorative elements */}
      <div className="absolute bottom-6 lg:bottom-10 left-4 right-4 lg:left-6 lg:right-6">
        <div className="bg-red-600/30 rounded-xl p-3 lg:p-4 text-center border-2 border-red-500/50">
          <div className="text-3xl lg:text-4xl mb-2 animate-spin" style={{ animationDuration: '3s' }}>🌟</div>
          <p className="text-white font-bold text-sm lg:text-base">Keep learning!</p>
          <p className="text-red-200 text-xs lg:text-sm">You're awesome!</p>
        </div>
      </div>

      {/* Floating elements in sidebar */}
      <div className="absolute top-24 lg:top-32 right-3 lg:right-4 text-xl lg:text-2xl animate-bounce" style={{ animationDelay: '1s' }}>🎈</div>
      <div className="absolute top-80 lg:top-96 left-3 lg:left-4 text-lg lg:text-xl animate-pulse" style={{ animationDelay: '2s' }}>⭐</div>
    </div>
  );
};

export default Sidebar;