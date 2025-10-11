import React from 'react';
import Button from '../../UI/Button/Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Never Overpay Again
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Track prices from your favorite stores and get instant notifications when products drop below your target price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="large"
              className="bg-white text-blue-600 hover:bg-gray-100"
              href="/register"
            >
              Start Tracking Free
            </Button>
            <Button 
              variant="outline" 
              size="large"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              href="/how-it-works"
            >
              How It Works
            </Button>
          </div>
        </div>
        
        {/* Demo Image/Illustration */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Product Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;