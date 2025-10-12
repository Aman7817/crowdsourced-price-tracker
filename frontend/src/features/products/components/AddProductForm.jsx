// // src/features/products/components/AddProductForm.jsx
// import React, { useState } from 'react';

// const AddProductForm = ({ onAddProduct, onCancel }) => {
//   const [url, setUrl] = useState('');
//   const [targetPrice, setTargetPrice] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const validateUrl = (url) => {
//     const amazonRegex = /amazon\./i;
//     const flipkartRegex = /flipkart\./i;
//     return amazonRegex.test(url) || flipkartRegex.test(url);
//   };

//     // AddProductForm में submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Strict validation
//     if (!formData.url.trim()) {
//       setError('Product URL is required');
//       return;
//     }

//     if (!formData.targetPrice || formData.targetPrice <= 0) {
//       setError('Please set a valid target price greater than 0');
//       return;
//     }

//     setLoading(true);
//     try {
//       await onAddProduct({
//         url: formData.url.trim(),
//         targetPrice: parseFloat(formData.targetPrice) // Ensure it's a number
//       });
      
//       // Reset form
//       setFormData({ url: '', targetPrice: '' });
//     } catch (err) {
//       setError(err.message || 'Failed to add product');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-slate-800 rounded-lg p-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-slate-300 mb-1">
//             Product URL (Amazon/Flipkart)
//           </label>
//           <input
//             type="url"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             placeholder="https://amazon.in/... or https://flipkart.com/..."
//             className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-slate-300 mb-1">
//             Target Price (₹)
//           </label>
//           <input
//             type="number"
//             value={targetPrice}
//             onChange={(e) => setTargetPrice(e.target.value)}
//             placeholder="Enter your target price"
//             className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white"
//             required
//             min="1"
//             step="0.01"
//           />
//         </div>

//         {error && (
//           <div className="text-red-400 text-sm bg-red-900/30 p-2 rounded border border-red-800">
//             {error}
//           </div>
//         )}

//         <div className="flex gap-3 pt-2">
//           {onCancel && (
//             <button
//               type="button"
//               onClick={onCancel}
//               disabled={loading}
//               className="flex-1 bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:bg-slate-400"
//             >
//               Cancel
//             </button>
//           )}
//           <button
//             type="submit"
//             disabled={loading}
//             className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
//           >
//             {loading ? 'Adding Product...' : 'Start Tracking'}
//           </button>
//         </div>
//       </form>

//       <div className="mt-4 text-xs text-slate-400">
//         <p>✅ Supported: Amazon.in, Flipkart.com</p>
//         <p>✅ We'll notify you when price drops below your target</p>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;


// src/features/products/components/AddProductForm.jsx
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct, onCancel, error, success }) => {
  // ✅ FIX: formData state define karein
  const [formData, setFormData] = useState({ 
    url: '', 
    targetPrice: '' 
  });
  const [loading, setLoading] = useState(false);
  // Note: error prop parent se aa raha hai, isliye local state nahi banana

  const validateUrl = (url) => {
    const amazonRegex = /amazon\./i;
    const flipkartRegex = /flipkart\./i;
    return amazonRegex.test(url) || flipkartRegex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ FIX: Ab formData defined hai
    if (!formData.url.trim()) {
      // setError('Product URL is required'); // ❌ Don't use local error state
      return;
    }

    if (!validateUrl(formData.url)) {
      // setError('Please enter a valid Amazon or Flipkart URL');
      return;
    }

    if (!formData.targetPrice || formData.targetPrice <= 0) {
      // setError('Please set a valid target price greater than 0');
      return;
    }

    setLoading(true);
    try {
      await onAddProduct({
        url: formData.url.trim(),
        targetPrice: parseFloat(formData.targetPrice)
      });
      
      // Reset form on success
      setFormData({ url: '', targetPrice: '' });
    } catch (err) {
      // Error parent component handle karega
      console.error('Error in form:', err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FIX: Input change handler
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value 
    }));
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Product URL (Amazon/Flipkart)
          </label>
          <input
            type="url"
            value={formData.url} // ✅ FIX: formData.url use karein
            onChange={(e) => handleInputChange('url', e.target.value)}
            placeholder="https://amazon.in/... or https://flipkart.com/..."
            className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Target Price (₹)
          </label>
          <input
            type="number"
            value={formData.targetPrice} // ✅ FIX: formData.targetPrice use karein
            onChange={(e) => handleInputChange('targetPrice', e.target.value)}
            placeholder="Enter your target price"
            className="w-full px-3 py-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white"
            required
            min="1"
            step="0.01"
          />
        </div>

        {/* ✅ FIX: Use props for error and success messages */}
        {error && (
          <div className="text-red-400 text-sm bg-red-900/30 p-2 rounded border border-red-800">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-400 text-sm bg-green-900/30 p-2 rounded border border-green-800">
            {success}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:bg-slate-400"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {loading ? 'Adding Product...' : 'Start Tracking'}
          </button>
        </div>
      </form>

      <div className="mt-4 text-xs text-slate-400">
        <p>✅ Supported: Amazon.in, Flipkart.com</p>
        <p>✅ We'll notify you when price drops below your target</p>
      </div>
    </div>
  );
};

export default AddProductForm;