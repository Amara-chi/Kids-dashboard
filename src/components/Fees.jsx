import React from 'react';

const Fees = () => {
  const payments = [
    {
      month: 'January 2024',
      amount: '$200',
      status: 'paid',
      dueDate: '2024-01-15',
      emoji: '✅'
    },
    {
      month: 'February 2024',
      amount: '$200',
      status: 'paid',
      dueDate: '2024-02-15',
      emoji: '✅'
    },
    {
      month: 'March 2024',
      amount: '$200',
      status: 'due',
      dueDate: '2024-03-15',
      emoji: '⏰'
    },
    {
      month: 'April 2024',
      amount: '$200',
      status: 'upcoming',
      dueDate: '2024-04-15',
      emoji: '📅'
    }
  ];

  const feeBreakdown = [
    { item: 'Monthly Tuition', amount: '$150', emoji: '📚' },
    { item: 'Activity Materials', amount: '$30', emoji: '🎨' },
    { item: 'Snacks & Lunch', amount: '$20', emoji: '🍎' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'due':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'upcoming':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid':
        return 'PAID ✨';
      case 'due':
        return 'DUE NOW!';
      case 'upcoming':
        return 'UPCOMING';
      default:
        return status.toUpperCase();
    }
  };

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl">
        <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-3 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left">
          <span className="text-5xl lg:text-6xl animate-bounce">💳</span>
          School Fees & Payments
        </h1>
        <p className="text-lg lg:text-2xl opacity-90 text-center lg:text-left">Keep track of your learning journey payments!</p>
      </div>

      {/* Quick Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl lg:rounded-3xl p-5 lg:p-6 text-white text-center shadow-xl">
          <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">✅</div>
          <h3 className="text-lg lg:text-xl font-bold mb-2">Paid This Year</h3>
          <p className="text-2xl lg:text-3xl font-bold">$400</p>
          <p className="text-base lg:text-lg opacity-90">Great job!</p>
        </div>
        <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl lg:rounded-3xl p-5 lg:p-6 text-white text-center shadow-xl">
          <div className="text-4xl lg:text-5xl animate-pulse mb-2 lg:mb-3">⏰</div>
          <h3 className="text-lg lg:text-xl font-bold mb-2">Amount Due</h3>
          <p className="text-2xl lg:text-3xl font-bold">$200</p>
          <p className="text-base lg:text-lg opacity-90">Due Soon!</p>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl lg:rounded-3xl p-5 lg:p-6 text-white text-center shadow-xl">
          <div className="text-4xl lg:text-5xl animate-spin mb-2 lg:mb-3" style={{ animationDuration: '3s' }}>💰</div>
          <h3 className="text-lg lg:text-xl font-bold mb-2">Monthly Fee</h3>
          <p className="text-2xl lg:text-3xl font-bold">$200</p>
          <p className="text-base lg:text-lg opacity-90">Per Month</p>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-purple-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-bounce">📋</span>
          Payment History
        </h2>
        <div className="space-y-3 lg:space-y-4">
          {payments.map((payment, index) => (
            <div key={index} className={`${getStatusColor(payment.status)} border-2 lg:border-4 rounded-xl lg:rounded-2xl p-4 lg:p-6 transition-all duration-300 transform hover:scale-102`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                  <div className="text-4xl lg:text-5xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {payment.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-2xl font-bold text-center sm:text-left">{payment.month}</h3>
                    <p className="text-sm lg:text-lg opacity-80 text-center sm:text-left">Due: {payment.dueDate}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-2xl lg:text-3xl font-bold">{payment.amount}</p>
                  <span className={`px-4 py-2 rounded-full font-bold text-lg ${
                    payment.status === 'paid' ? 'bg-green-500 text-white animate-pulse' :
                    payment.status === 'due' ? 'bg-red-500 text-white animate-bounce' :
                    'bg-blue-500 text-white'
                  }`}>
                    {getStatusText(payment.status)}
                  </span>
                </div>
              </div>
              {payment.status === 'due' && (
                <div className="mt-3 lg:mt-4">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 lg:py-4 px-4 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 text-lg lg:text-xl animate-pulse">
                    Pay Now! 💳
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-yellow-300">
        <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-pulse">🧾</span>
          What Your Fee Includes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {feeBreakdown.map((item, index) => (
            <div key={index} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-orange-200 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl lg:text-6xl animate-bounce mb-3 lg:mb-4" style={{ animationDelay: `${index * 0.3}s` }}>
                {item.emoji}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{item.item}</h3>
              <p className="text-xl lg:text-2xl font-bold text-orange-600">{item.amount}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-8 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 lg:border-3 border-orange-200 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">Total Monthly Fee</h3>
          <p className="text-3xl lg:text-4xl font-bold text-orange-600 animate-pulse">$200</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border-2 lg:border-4 border-green-200">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-600 mb-4 lg:mb-6 flex items-center gap-3 justify-center lg:justify-start">
          <span className="text-3xl lg:text-4xl animate-spin" style={{ animationDuration: '2s' }}>💳</span>
          Easy Payment Options
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          <div className="bg-blue-50 border-2 lg:border-3 border-blue-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">💳</div>
            <h3 className="text-sm lg:text-lg font-bold text-blue-600">Credit Card</h3>
          </div>
          <div className="bg-green-50 border-2 lg:border-3 border-green-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">🏦</div>
            <h3 className="text-sm lg:text-lg font-bold text-green-600">Bank Transfer</h3>
          </div>
          <div className="bg-purple-50 border-2 lg:border-3 border-purple-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">📱</div>
            <h3 className="text-sm lg:text-lg font-bold text-purple-600">Mobile Pay</h3>
          </div>
          <div className="bg-yellow-50 border-2 lg:border-3 border-yellow-200 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl lg:text-5xl animate-bounce mb-2 lg:mb-3">💰</div>
            <h3 className="text-sm lg:text-lg font-bold text-yellow-600">Cash</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;