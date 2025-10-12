// src/pages/Dashboard/components/EmptyState.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">📦</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">
          No Products Tracked Yet
        </h3>
        
        <p className="text-slate-300 mb-8">
          Start tracking Amazon and Flipkart products to get notified when prices drop below your target.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/add-product"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Add Your First Product
          </Link>
          
          <div className="text-slate-400 text-sm">
            <p>✅ Paste product URL</p>
            <p>✅ Set target price</p>
            <p>✅ Get price drop alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;