// src/features/products/components/ProductCard.jsx
import React from 'react';
import { productAPI } from '../services/ProductAPI';

const ProductCard = ({ product, onRemove }) => {
  const handleScan = async () => {
    try {
      await productAPI.scanProduct(product._id);
      // Refresh data or show success message
    } catch (error) {
      console.error('Scan failed:', error);
    }
  };

  const isPriceBelowTarget = product.currentPrice <= product.targetPrice;

  return (
    <div className={`border rounded-lg p-4 ${isPriceBelowTarget ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
          <p className="text-sm text-gray-600 truncate">{product.url}</p>
        </div>
        {product.image && (
          <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded ml-4" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Current Price:</span>
          <span className={`font-bold ${isPriceBelowTarget ? 'text-green-600' : 'text-gray-900'}`}>
            ₹{product.currentPrice}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Target Price:</span>
          <span className="font-medium text-gray-900">₹{product.targetPrice}</span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Last checked: {new Date(product.lastChecked).toLocaleDateString()}</span>
          <span className={product.isActive ? 'text-green-600' : 'text-gray-500'}>
            {product.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={handleScan}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          Scan Now
        </button>
        
        <button
          onClick={() => onRemove(product._id)}
          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
        >
          Remove
        </button>
      </div>
      
      {isPriceBelowTarget && (
        <div className="mt-3 p-2 bg-green-100 text-green-800 text-sm rounded text-center">
          🎉 Price reached your target!
        </div>
      )}
    </div>
  );
};

export default ProductCard;