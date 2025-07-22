import React, { useState, useEffect, useRef } from 'react';
import { X, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm your learning buddy! 🤖✨", sender: 'ai', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [synthesis, setSynthesis] = useState(null);
  const messagesEndRef = useRef(null);

  const aiResponses = [
    "That's awesome! Keep up the great work! 🌟",
    "I'm so proud of you! You're learning so much! 🏆",
    "Want to try a fun counting game? Let's count to 10! 🔢",
    "You're such a smart cookie! What would you like to learn today? 🍪",
    "Wow! You're amazing! Let's practice some letters together! 📝",
    "Great question! Learning is so much fun, isn't it? 🎉",
    "You're doing fantastic! I love helping you learn new things! ❤️",
    "That's wonderful! Every day you get smarter and smarter! 🧠✨"
  ];

  useEffect(() => {
    // Initialize Web Speech API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';
      
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleUserMessage(transcript);
        setIsListening(false);
      };
      
      recognitionInstance.onerror = () => {
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    }

    if ('speechSynthesis' in window) {
      setSynthesis(window.speechSynthesis);
    }

    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    // AI Response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Speak the AI response
      speakMessage(aiResponse.text);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      handleUserMessage(inputMessage);
      setInputMessage('');
    }
  };

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const speakMessage = (text) => {
    if (synthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      synthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesis) {
      synthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 lg:p-4">
      <div className="bg-white rounded-2xl lg:rounded-3xl w-full max-w-2xl h-[90vh] lg:h-[600px] flex flex-col shadow-2xl border-2 lg:border-4 border-purple-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl lg:rounded-t-2xl p-4 lg:p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="text-3xl lg:text-4xl animate-bounce">🤖</div>
            <div>
              <h3 className="text-lg lg:text-2xl font-bold">Learning Buddy</h3>
              <p className="text-purple-100 text-sm lg:text-base">Your AI Friend</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 p-2 lg:p-3 rounded-full transition-all duration-300"
          >
            <X className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 lg:p-6 overflow-y-auto bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="space-y-3 lg:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} px-2 lg:px-0`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border-2 lg:border-3 border-purple-200'
                  }`}
                >
                  <p className="text-base lg:text-lg font-medium">{message.text}</p>
                  <p className={`text-xs lg:text-sm mt-1 lg:mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 lg:p-6 border-t-2 lg:border-t-4 border-purple-200 bg-white rounded-b-xl lg:rounded-b-2xl">
          <div className="flex gap-2 lg:gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message or use voice..."
              className="flex-1 px-3 lg:px-4 py-2 lg:py-3 border-2 lg:border-3 border-purple-300 rounded-xl lg:rounded-2xl focus:border-purple-500 focus:outline-none text-base lg:text-lg"
            />
            
            {/* Voice Controls */}
            <button
              onClick={startListening}
              disabled={isListening}
              className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl font-bold transition-all duration-300 ${
                isListening
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5 lg:w-6 lg:h-6" /> : <Mic className="w-5 h-5 lg:w-6 lg:h-6" />}
            </button>
            
            <button
              onClick={isSpeaking ? stopSpeaking : () => speakMessage("Hello! I'm your learning buddy!")}
              className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl font-bold transition-all duration-300 ${
                isSpeaking
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-5 h-5 lg:w-6 lg:h-6" /> : <Volume2 className="w-5 h-5 lg:w-6 lg:h-6" />}
            </button>
            
            <button
              onClick={handleSendMessage}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            >
              Send! 🚀
            </button>
          </div>
          
          {isListening && (
            <div className="text-center mt-2 lg:mt-3 text-red-600 font-bold animate-pulse text-sm lg:text-base">
              🎤 Listening... Speak now!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;