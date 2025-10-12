// // // src/pages/Dashboard/Dashboard.jsx
// // import React, { useState } from 'react';
// // import { useAuthContext } from '../../context/AuthContext';
// // import { useProducts } from '../../features/products/hooks/useProducts';
// // import ProductList from '../../features/products/components/ProductList';
// // import AddProductForm from '../../features/products/components/AddProductForm';
// // import StatsCard from './components/StatsCard';
// // import EmptyState from './components/EmptyState';
// // import WelcomeBanner from './components/WelcomeBanner';

// // const Dashboard = () => {
// //   const { user } = useAuthContext();
// //   const { products, loading, addProduct, refetch } = useProducts();
// //   const [showAddForm, setShowAddForm] = useState(false);

// //   // Calculate stats
// //   const totalProducts = Array.isArray(products) ? products.length : 0;
// //   const activeTrackers = Array.isArray(products)
// //     ? products.filter((p) => p.isActive).length
// //     : 0;
// //   const targetReached = Array.isArray(products)
// //     ? products.filter((p) => p.currentPrice <= p.targetPrice).length
// //     : 0;

// //   const totalSavings = products.reduce((sum, product) => {
// //     if (product.currentPrice <= product.targetPrice) {
// //       return sum + (product.targetPrice - product.currentPrice);
// //     }
// //     return sum;
// //   }, 0);

// //   // Add product handler
// //   const handleAddProduct = async (productData, setError, setSuccess) => {
// //     try {
// //       await addProduct(productData);
// //       setSuccess('Product added successfully!');
// //       setError(null);
// //       refetch(); // Refresh products list
// //     } catch (error) {
// //       const message =
// //         error.response?.data?.message || error.message || 'Failed to add product';
// //       setError(message);
// //       setSuccess(null);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
// //         <div className="text-white text-xl">Loading your dashboard...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
// //       {/* Header */}
// //       <div className="border-b border-slate-700">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center py-6">
// //             <div>
// //               <h1 className="text-3xl font-bold text-white">
// //                 Welcome back, {user?.FirstName}! 👋
// //               </h1>
// //               <p className="text-slate-300 mt-1">
// //                 Track your products and save money
// //               </p>
// //             </div>

// //             {/* Quick Add Button */}
// //             <button
// //               onClick={() => setShowAddForm(true)}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
// //             >
// //               + Add Product
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Welcome Banner for New Users */}
// //         {products.length === 0 && <WelcomeBanner />}

// //         {/* Add Product Form Modal */}
// //         {showAddForm && (
// //           <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
// //             <div className="bg-slate-800 rounded-xl max-w-md w-full p-6 border border-slate-600">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h3 className="text-xl font-bold text-white">
// //                   Add Product to Track
// //                 </h3>
// //                 <button
// //                   onClick={() => setShowAddForm(false)}
// //                   className="text-slate-400 hover:text-white"
// //                 >
// //                   ✕
// //                 </button>
// //               </div>
// //               <AddProductForm
// //                 onAddProduct={handleAddProduct}
// //                 onCancel={() => setShowAddForm(false)}
// //               />
// //             </div>
// //           </div>
// //         )}

// //         {/* Stats Cards */}
// //         {products.length > 0 && (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //             <StatsCard title="Products Tracking" value={totalProducts} icon="📦" color="blue" />
// //             <StatsCard title="Active Trackers" value={activeTrackers} icon="🔍" color="green" />
// //             <StatsCard title="Targets Reached" value={targetReached} icon="🎯" color="purple" />
// //             <StatsCard
// //               title="Total Savings"
// //               value={`₹${totalSavings.toLocaleString()}`}
// //               icon="💰"
// //               color="yellow"
// //             />
// //           </div>
// //         )}

// //         {/* Products Section */}
// //         <div>
// //           {products.length === 0 ? (
// //             <EmptyState onAddProduct={() => setShowAddForm(true)} />
// //           ) : (
// //             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-2xl font-bold text-white">
// //                   Your Tracked Products ({totalProducts})
// //                 </h2>
// //                 <span
// //                   className={`px-3 py-1 rounded-full text-sm font-medium ${
// //                     activeTrackers > 0
// //                       ? 'bg-green-500/20 text-green-300 border border-green-500/30'
// //                       : 'bg-slate-700 text-slate-300'
// //                   }`}
// //                 >
// //                   {activeTrackers} Active
// //                 </span>
// //               </div>

// //               <ProductList />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// // // src/pages/Dashboard/Dashboard.jsx
// // import React, { useState } from 'react';
// // import { useAuthContext } from '../../context/AuthContext';
// // import { useProducts } from '../../features/products/hooks/useProducts';
// // import ProductList from '../../features/products/components/ProductList';
// // import AddProductForm from '../../features/products/components/AddProductForm'; // ✅ Import
// // import StatsCard from './components/StatsCard';
// // import EmptyState from './components/EmptyState';
// // import WelcomeBanner from './components/WelcomeBanner';

// // const Dashboard = () => {
// //   const { user } = useAuthContext();
// //   const { products, loading, addProduct } = useProducts(); // ✅ addProduct लेना
// //   const [showAddForm, setShowAddForm] = useState(false);

// //   // Calculate stats
// //   const totalProducts = Array.isArray(products) ? products.length : 0;
// //   const activeTrackers = Array.isArray(products) ? products.filter(p => p.isActive).length : 0;
// //   const targetReached = Array.isArray(products) ? products.filter(p => p.currentPrice <= p.targetPrice).length : 0;

// //   const totalSavings = products.reduce((sum, product) => {
// //     if (product.currentPrice <= product.targetPrice) {
// //       return sum + (product.targetPrice - product.currentPrice);
// //     }
// //     return sum;
// //   }, 0);

// //   // ✅ Add product handler
// //   const handleAddProduct = async (productData) => {
// //     try {
// //       await addProduct(productData);
// //       setShowAddForm(false);
// //       // Success message will be shown by the form itself
// //     } catch (error) {
// //       throw error; // Let the form handle the error
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
// //         <div className="text-white text-xl">Loading your dashboard...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
// //       {/* Header */}
// //       <div className="border-b border-slate-700">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center py-6">
// //             <div>
// //               <h1 className="text-3xl font-bold text-white">
// //                 Welcome back, {user?.FirstName}! 👋
// //               </h1>
// //               <p className="text-slate-300 mt-1">
// //                 Track your products and save money
// //               </p>
// //             </div>
            
// //             {/* Quick Add Button */}
// //             <button 
// //               onClick={() => setShowAddForm(true)}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
// //             >
// //               + Add Product
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Welcome Banner for New Users */}
// //         {products.length === 0 && <WelcomeBanner />}
        
// //         {/* Add Product Form Modal */}
// //         {showAddForm && (
// //           <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
// //             <div className="bg-slate-800 rounded-xl max-w-md w-full p-6 border border-slate-600">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h3 className="text-xl font-bold text-white">Add Product to Track</h3>
// //                 <button 
// //                   onClick={() => setShowAddForm(false)}
// //                   className="text-slate-400 hover:text-white"
// //                 >
// //                   ✕
// //                 </button>
// //               </div>
// //               <AddProductForm 
// //                 onAddProduct={handleAddProduct}
// //                 onCancel={() => setShowAddForm(false)}
// //               />
// //             </div>
// //           </div>
// //         )}

// //         {/* Stats Cards */}
// //         {products.length > 0 && (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //             <StatsCard
// //               title="Products Tracking"
// //               value={totalProducts}
// //               icon="📦"
// //               color="blue"
// //             />
// //             <StatsCard
// //               title="Active Trackers"
// //               value={activeTrackers}
// //               icon="🔍"
// //               color="green"
// //             />
// //             <StatsCard
// //               title="Targets Reached"
// //               value={targetReached}
// //               icon="🎯"
// //               color="purple"
// //             />
// //             <StatsCard
// //               title="Total Savings"
// //               value={`₹${totalSavings.toLocaleString()}`}
// //               icon="💰"
// //               color="yellow"
// //             />
// //           </div>
// //         )}

// //         {/* Products Section */}
// //         <div>
// //           {products.length === 0 ? (
// //             <EmptyState onAddProduct={() => setShowAddForm(true)} />
// //           ) : (
// //             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h2 className="text-2xl font-bold text-white">
// //                   Your Tracked Products ({totalProducts})
// //                 </h2>
// //                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
// //                   activeTrackers > 0 
// //                     ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
// //                     : 'bg-slate-700 text-slate-300'
// //                 }`}>
// //                   {activeTrackers} Active
// //                 </span>
// //               </div>
              
// //               <ProductList />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;





import React, { useState,useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useProducts } from '../../features/products/hooks/useProducts';
import ProductList from '../../features/products/components/ProductList';
import AddProductForm from '../../features/products/components/AddProductForm';
import StatsCard from './components/StatsCard';
import EmptyState from './components/EmptyState';
import WelcomeBanner from './components/WelcomeBanner';



// src/pages/Dashboard/Dashboard.jsx
const Dashboard = () => {
  const { user } = useAuthContext();
  const { products, loading, addProduct, removeProduct, refetch } = useProducts();
  const [showAddForm, setShowAddForm] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Ensure products is always an array for safety
  const safeProducts = Array.isArray(products) ? products : [];

  // Stats calculation with safe array
  const totalProducts = safeProducts.length;
  const activeTrackers = safeProducts.filter((p) => p.isActive).length;
  const targetReached = safeProducts.filter((p) => p.currentPrice <= p.targetPrice).length;
  const totalSavings = safeProducts.reduce((sum, p) => {
    if (p.currentPrice <= p.targetPrice) {
      return sum + (p.targetPrice - p.currentPrice);
    }
    return sum;
  }, 0);

  // Improved Add Product handler
  const handleAddProduct = async (productData) => {
    try {
      setError(null);
      setSuccess(null);

      await addProduct(productData);
      setSuccess('Product added successfully!');
      
      // Close form and refresh
      setShowAddForm(false);
      
      
      // Optional: Refetch to ensure data consistency
      setTimeout(() => {
        refetch();
      }, 1000);
      
    } catch (err) {
      console.error("Error in handleAddProduct:", err);
      const message = err.response?.data?.message || err.message || 'Failed to add product';
      setError(message);
      setSuccess(null);
    }
  };

  // Debug logging
  useEffect(() => {
    console.log('Dashboard - Current products:', products);
    console.log('Dashboard - Safe products:', safeProducts);
  }, [products, safeProducts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading your dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome back, {user?.FirstName}! 👋
              </h1>
              <p className="text-slate-300 mt-1">Track your products and save money</p>
            </div>

            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              + Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Debug Info - Remove after fixing */}
        <div className="bg-yellow-100 p-2 mb-4 rounded text-sm">
          Debug: {safeProducts.length} products loaded | 
          Array: {Array.isArray(products) ? 'Yes' : 'No'}
        </div>

        {safeProducts.length === 0 && <WelcomeBanner />}

        {/* Add Product Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl max-w-md w-full p-6 border border-slate-600">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Add Product to Track</h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <AddProductForm
                onAddProduct={handleAddProduct}
                error={error}
                success={success}
                loading={loading}
                onCancel={() =>{
                 setShowAddForm(false);
                  setError(null);
                  setSuccess(null);
                }}
                  
              />
            </div>
          </div>
        )}

        {/* Stats Cards */}
        {safeProducts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard title="Products Tracking" value={totalProducts} icon="📦" color="blue" />
            <StatsCard title="Active Trackers" value={activeTrackers} icon="🔍" color="green" />
            <StatsCard title="Targets Reached" value={targetReached} icon="🎯" color="purple" />
            <StatsCard
              title="Total Savings"
              value={`₹${totalSavings.toLocaleString()}`}
              icon="💰"
              color="yellow"
            />
          </div>
        )}

        {/* Products Section */}
        {safeProducts.length === 0 ? (
          <EmptyState onAddProduct={() => setShowAddForm(true)} />
        ) : (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Tracked Products ({totalProducts})</h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTrackers > 0
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-slate-700 text-slate-300'
                }`}
              >
                {activeTrackers} Active
              </span>
            </div>
            {/* Products Container with proper constraints */}
            <div className="max-w-full overflow-hidden">
              <ProductList products={safeProducts} removeProduct={removeProduct} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;