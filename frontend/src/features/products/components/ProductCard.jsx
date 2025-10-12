// src/features/products/components/ProductCard.jsx
import React from 'react';
import { productAPI } from '../services/ProductAPI';
import { useState } from 'react';
import AddAlertForm from '../../alerts/components/AlertAddForm';

const ProductCard = ({ product, onRemove }) => {
  const [showAlertForm, setShowAlertForm] = useState(false);
    // ✅ Better status detection
  const isActive = product.isActive !== false; // Default to true if undefined
  const hasValidData = product.url && product.targetPrice;
  
  // ✅ Better price handling
  const currentPrice = product.currentPrice || 0;
  const targetPrice = product.targetPrice || 0;
  const hasPrices = currentPrice > 0 && targetPrice > 0;
  
  // ✅ Better last checked display
  const getLastChecked = () => {
    if (!product.lastChecked || product.lastChecked === 'Never') return 'Never';
    try {
      // If it's a timestamp, convert to date
      if (typeof product.lastChecked === 'number' || 
          (typeof product.lastChecked === 'string' && !isNaN(Date.parse(product.lastChecked)))) {
        return new Date(product.lastChecked).toLocaleDateString();
      }
      return product.lastChecked;
    } catch {
      return 'Never';
    }
  };
  // ProductCard.jsx mein scan function fix karein
  const handleScan = async () => {
    try {
      console.log('🔄 Scanning product:', product._id, product.name);
      
      // ✅ Correct API call - check your actual API endpoint
      const result = await productAPI.scanProduct(product._id);
      console.log('✅ Scan result:', result);
      
      // ✅ Success handling
      if (result.success) {
        alert('✅ Product scanned successfully! Prices updated.');
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        alert('❌ Scan completed but no price update found.');
      }
      
    } catch (error) {
      console.error('❌ Scan failed:', error);
      alert('❌ Scan failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const isPriceBelowTarget = product.currentPrice <= product.targetPrice;

  // URL को छोटा करने का function
  const truncateUrl = (url, maxLength = 40) => {
    if (!url) return '';
    if (url.length <= maxLength) return url;
    
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      const path = urlObj.pathname;
      
      // Domain + important path parts
      if (domain.includes('amazon')) {
        return `amazon.in...${path.substring(path.lastIndexOf('/'))}`;
      } else if (domain.includes('flipkart')) {
        return `flipkart.com...${path.substring(path.lastIndexOf('/'))}`;
      }
      
      return `${domain}...`;
    } catch {
      return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
    }
  };

  // Title को छोटा करने का function
  const truncateTitle = (name, maxLength = 60) => {
    if (!name) return 'No Title';
    return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
  };

  return (
    <div className={`border rounded-lg p-4 ${isPriceBelowTarget ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'} hover:shadow-md transition-shadow`}>
      {/* Header Section - Improved Layout */}
      <div className="flex justify-between items-start mb-3 gap-3">
        {/* Text Content - Takes available space */}
        <div className="flex-1 min-w-0"> {/* min-w-0 prevents flex overflow */}
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 break-words">
            {truncateTitle(product.name)}
          </h3>
          <p className="text-xs text-gray-500 break-all font-mono">
            {truncateUrl(product.url)}
          </p>
        </div>
        
        {/* Product Image */}
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-16 h-16 object-cover rounded flex-shrink-0" 
          />
        )}
      </div>
      
      {/* Price and Status Information */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Current Price:</span>
          <span className={`font-bold ${isPriceBelowTarget ? 'text-green-600' : 'text-gray-900'}`}>
            ₹{product.currentPrice || '0'}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Target Price:</span>
          <span className="font-medium text-gray-900">
            ₹{product.targetPrice || 'Not set'}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>
            Last checked: {getLastChecked()}
          </span>
          <span className={product.isActive ? 'text-green-600' : 'text-gray-500'}>
            {product.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between mt-4 pt-4 border-t border-gray-200 gap-2">
        <button
          onClick={handleScan}
          className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
        >
          🔄 Scan Now
        </button>
        
        <button
          onClick={() => setShowAlertForm(true)}
          className="flex-1 px-3 py-2 bg-yellow-500 text-black text-sm rounded hover:bg-yellow-600 transition-colors font-medium"
        >
          🔔 Add Alert
        </button>
        
        <button
          onClick={() => onRemove(product._id)}
          className="flex-1 px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
        >
          🗑️ Remove
        </button>
      </div>

      {/* Alert Form Modal */}
      {showAlertForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl max-w-md w-full p-6 border border-slate-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Set Price Alert</h3>
              <button 
                onClick={() => setShowAlertForm(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <AddAlertForm 
              product={product}
              onSuccess={() => {
                setShowAlertForm(false);
                alert('Price alert created successfully!');
              }}
              onCancel={() => setShowAlertForm(false)}
            />
          </div>
        </div>
      )}
 
      
      {/* Price Target Reached Banner */}
        {isPriceBelowTarget && (
          <div className="mt-3 p-2 bg-green-100 text-green-800 text-sm rounded text-center">
            🎉 Price reached your target!
          </div>
        )}
          </div>
      );
    };
    
    export default ProductCard;