// src/pages/AddProductPage/AddProductPage.jsx
import React from 'react';
import { useAuthContext } from "../../context/AuthContext"
import AddProductForm from '../../features/products/components/AddProductForm';
import { useProducts } from '../../features/products/hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const { user } = useAuthContext();
  const { addProduct } = useProducts(); // ✅ useProducts hook से addProduct लें
  const navigate = useNavigate();

  // ✅ Add product handler function बनाएं
  const handleAddProduct = async (productData) => {
    try {
      await addProduct(productData);
      // Success होने पर dashboard पर redirect करें
      navigate('/dashboard');
    } catch (error) {
      throw error; // Form को error handle करने दें
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Add New Product
          </h1>
          <p className="text-slate-300">
            Track price drops and save money on your favorite products
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
              {/* ✅ onAddProduct prop pass करें */}
              <AddProductForm onAddProduct={handleAddProduct} />
            </div>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4">How it works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 text-blue-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Paste Product URL</h4>
                    <p className="text-slate-400 text-sm">
                      Copy and paste Amazon or Flipkart product link
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-500/20 text-green-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Set Target Price</h4>
                    <p className="text-slate-400 text-sm">
                      Enter the price you want to buy at
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500/20 text-purple-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Get Notified</h4>
                    <p className="text-slate-400 text-sm">
                      We'll alert you when price drops below your target
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Sites */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-white font-medium mb-3">Supported Sites</h4>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-lg text-sm font-medium">
                    Amazon.in
                  </div>
                  <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium">
                    Flipkart.com
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Dashboard */}
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;