// // // // src/pages/Alerts/Alerts.jsx
// // // import React from "react";
// // // import { useAlerts } from "../../features/alerts/hooks/useAlerts";

// // // const Alerts = () => {
// // //   const { alerts, loading } = useAlerts();

// // //   if (loading) return <div className="text-white">Loading alerts...</div>;

// // //   return (
// // //     <div className="p-6">
// // //       <h1 className="text-2xl font-bold text-yellow-400 mb-4">My Alerts</h1>
// // //       {alerts.length === 0 ? (
// // //         <p className="text-white/80">No alerts found. Add one from a product page.</p>
// // //       ) : (
// // //         <ul className="space-y-3">
// // //           {alerts.map((alert) => (
// // //             <li key={alert._id} className="p-3 bg-gray-800 rounded flex justify-between items-center">
// // //               <span>Product ID: {alert.productId}</span>
// // //               <span>Target: ₹{alert.targetPrice}</span>
// // //               <span>Status: {alert.isActive ? "Active" : "Inactive"}</span>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Alerts;


// // import React from "react";
// // import { useAlerts } from "../../features/alerts/hooks/useAlerts";

// // const Alerts = () => {
// //   const { alerts, loading } = useAlerts();

// //   if (loading) return <div className="text-white">Loading alerts...</div>;

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold text-yellow-400 mb-4">My Alerts</h1>
// //       {alerts.length === 0 ? (
// //         <p className="text-white/80">No alerts found. Add one from a product page.</p>
// //       ) : (
// //         <ul className="space-y-3">
// //           {alerts.map((alert) => (
// //             <li key={alert._id} className="p-3 bg-gray-800 rounded flex justify-between items-center">
// //               <span>Product ID: {alert.productId}</span>
// //               <span>Target: ₹{alert.targetPrice}</span>
// //               <span>Status: {alert.isActive ? "Active" : "Inactive"}</span>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default Alerts;



// import React from "react";
// import { useAlerts } from "../../features/alerts/hooks/useAlerts";
// import { Bell, AlertTriangle, CheckCircle } from "lucide-react";

// const Alerts = () => {
//   const { alerts, loading, error } = useAlerts();

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-[60vh] text-gray-300">
//         Loading your alerts...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="text-center text-red-400 mt-10">
//         ⚠️ Failed to load alerts: {error}
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-gray-200 px-6 py-10">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center space-x-3 mb-8">
//           <Bell className="text-yellow-400 w-7 h-7" />
//           <h1 className="text-3xl font-semibold text-yellow-400">My Alerts</h1>
//         </div>

//         {/* Empty State */}
//         {alerts.length === 0 ? (
//           <div className="text-center bg-gray-800/50 rounded-2xl p-10 shadow-lg border border-gray-700">
//             <AlertTriangle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
//             <p className="text-gray-300 text-lg font-medium">
//               No alerts found
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               You can add an alert from any product page to get price updates.
//             </p>
//           </div>
//         ) : (
//           <ul className="space-y-4">
//             {alerts.map((alert) => (
//               <li
//                 key={alert._id}
//                 className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-yellow-500 transition-all duration-300 rounded-xl p-5 flex justify-between items-center shadow-md hover:shadow-yellow-500/10"
//               >
//                 <div>
//                   <p className="font-semibold text-lg text-yellow-300">
//                     ₹{alert.targetPrice}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Product ID: {alert.productId}
//                   </p>
//                 </div>
//                 <div
//                   className={`flex items-center space-x-2 ${
//                     alert.isActive
//                       ? "text-green-400"
//                       : "text-gray-400 line-through"
//                   }`}
//                 >
//                   <CheckCircle className="w-5 h-5" />
//                   <span className="font-medium">
//                     {alert.isActive ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Alerts;


// src/pages/Alerts/Alerts.jsx
import React from "react";
import { useAlerts } from "../../features/alerts/hooks/useAlerts";

const Alerts = () => {
  const { alerts, loading, error } = useAlerts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading your alerts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-red-400 bg-red-900/30 p-4 rounded-lg border border-red-800">
          Error loading alerts: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🔔 Price Alerts
          </h1>
          <p className="text-slate-300 text-lg">
            Get notified when prices drop below your targets
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {alerts.length}
            </div>
            <div className="text-slate-300">Total Alerts</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {alerts.filter(alert => alert.isActive).length}
            </div>
            <div className="text-slate-300">Active Alerts</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {alerts.filter(alert => alert.triggered).length}
            </div>
            <div className="text-slate-300">Triggered Alerts</div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Your Alerts ({alerts.length})
            </h2>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                alerts.filter(a => a.isActive).length > 0 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-slate-700 text-slate-300'
              }`}>
                {alerts.filter(a => a.isActive).length} Active
              </span>
            </div>
          </div>

          {alerts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-white mb-2">
                No alerts yet
              </h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                You haven't created any price alerts yet. Add alerts to your products to get notified when prices drop.
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Go to Dashboard
                </button>
                <button 
                  onClick={() => window.location.href = '/add-product'}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-slate-600"
                >
                  Add Product
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {alerts.map((alert) => (
                <AlertCard key={alert._id} alert={alert} />
              ))}
            </div>
          )}
        </div>

        {/* How It Works Section */}
        <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            How Price Alerts Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-white mb-2">Set Target Price</h4>
              <p className="text-slate-400 text-sm">
                Choose the price you want to buy at for any product
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold text-white mb-2">24/7 Monitoring</h4>
              <p className="text-slate-400 text-sm">
                We continuously track prices and detect drops instantly
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-3">🔔</div>
              <h4 className="font-semibold text-white mb-2">Instant Notification</h4>
              <p className="text-slate-400 text-sm">
                Get notified immediately when your target price is reached
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Alert Card Component
const AlertCard = ({ alert }) => {
  const isTriggered = alert.triggered;
  const isActive = alert.isActive;

  return (
    <div className={`border rounded-xl p-5 transition-all duration-300 ${
      isTriggered 
        ? 'bg-green-500/10 border-green-500/30 shadow-lg shadow-green-500/10' 
        : 'bg-slate-800/30 border-slate-600 hover:border-slate-500'
    }`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-white text-lg mb-1">
            {alert.product?.name || `Product ${alert.productId}`}
          </h3>
          <p className="text-slate-400 text-sm">
            {alert.product?.site || 'Unknown Store'}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            isTriggered 
              ? 'bg-green-500/20 text-green-300' 
              : isActive 
                ? 'bg-blue-500/20 text-blue-300' 
                : 'bg-slate-700 text-slate-300'
          }`}>
            {isTriggered ? '🎉 Target Reached!' : isActive ? 'Active' : 'Inactive'}
          </span>
          {alert.createdAt && (
            <span className="text-slate-500 text-xs mt-1">
              {new Date(alert.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      {/* Price Information */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Target Price:</span>
          <span className="text-yellow-400 font-bold text-lg">
            ₹{alert.targetPrice}
          </span>
        </div>
        
        {alert.product?.currentPrice && (
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Current Price:</span>
            <span className={`font-semibold ${
              alert.product.currentPrice <= alert.targetPrice 
                ? 'text-green-400' 
                : 'text-white'
            }`}>
              ₹{alert.product.currentPrice}
            </span>
          </div>
        )}

        {alert.product?.currentPrice && alert.targetPrice && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Price Difference:</span>
            <span className={
              alert.product.currentPrice <= alert.targetPrice 
                ? 'text-green-400' 
                : 'text-red-400'
            }>
              {alert.product.currentPrice <= alert.targetPrice ? '✅ Below Target' : '❌ Above Target'}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-700">
        <button className="text-slate-400 hover:text-white text-sm transition-colors">
          View Product
        </button>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition-colors">
            Edit
          </button>
          <button className="px-3 py-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 text-sm rounded transition-colors border border-red-600/30">
            Delete
          </button>
        </div>
      </div>

      {/* Triggered Message */}
      {isTriggered && (
        <div className="mt-3 p-2 bg-green-500/20 text-green-300 text-sm rounded text-center border border-green-500/30">
          🎉 Great news! Your target price has been reached!
        </div>
      )}
    </div>
  );
};

export default Alerts;