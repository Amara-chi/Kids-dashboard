import React from 'react';
import { Home, BookOpen, Trophy, CreditCard, User, GraduationCap } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, emoji: '🏠' },
    { id: 'learning', label: 'Learning', icon: BookOpen, emoji: '📚' },
    { id: 'performance', label: 'Progress', icon: Trophy, emoji: '🏆' },
    { id: 'fees', label: 'Fees', icon: CreditCard, emoji: '💳' },
    { id: 'profile', label: 'Profile', icon: User, emoji: '👤' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-red-700 via-red-600 to-red-800 shadow-2xl z-10">
      {/* School Logo */}
      <div className="p-6 border-b border-red-500/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Sunny Kids</h1>
            <p className="text-red-200 text-sm">Learning Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-white text-red-600 shadow-lg transform scale-105'
                : 'text-white hover:bg-red-600/50 hover:transform hover:scale-105'
            }`}
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-6 right-6">
        <div className="bg-red-600/30 rounded-lg p-4 text-center">
          <div className="text-3xl mb-2">🌟</div>
          <p className="text-white text-sm">Keep learning!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;