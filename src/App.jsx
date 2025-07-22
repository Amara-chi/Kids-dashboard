import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Performance from './components/Performance.jsx';
import Learning from './components/Learning.jsx';
import Fees from './components/Fees.jsx';
import Profile from './components/Profile.jsx';
import FloatingElements from './components/FloatingElements.jsx';
import AIFriend from './components/AIFriend.jsx';
import MouseFollower from './components/MouseFollower.jsx';
import ChatWindow from './components/ChatWindow.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [chatOpen, setChatOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'performance':
        return <Performance />;
      case 'learning':
        return <Learning />;
      case 'fees':
        return <Fees />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-x-hidden">
        {/* Floating Background Elements */}
        <FloatingElements />
        
        {/* Mouse Follower */}
        <MouseFollower />
        
        {/* AI Friend */}
        <AIFriend onChatOpen={() => setChatOpen(true)} />
        
        {/* Chat Window */}
        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
        
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main Content */}
        <div className="lg:ml-64 min-h-screen relative z-10">
          {/* Mobile Header */}
          <div className="lg:hidden bg-gradient-to-r from-red-700 to-red-800 p-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white p-2 rounded-lg hover:bg-red-600"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </button>
            <h1 className="text-white font-bold text-lg">Sunny Kids</h1>
            <div className="w-10"></div>
          </div>
          
          {renderContent()}
        </div>
        
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;