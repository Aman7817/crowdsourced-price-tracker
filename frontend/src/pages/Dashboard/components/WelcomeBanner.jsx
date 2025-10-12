// src/pages/Dashboard/components/WelcomeBanner.jsx
import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            🎉 Welcome to PriceTracker!
          </h2>
          <p className="text-blue-100">
            Start tracking Amazon & Flipkart products to save money on your purchases.
          </p>
        </div>
        <div className="text-4xl">🚀</div>
      </div>
    </div>
  );
};

export default WelcomeBanner;