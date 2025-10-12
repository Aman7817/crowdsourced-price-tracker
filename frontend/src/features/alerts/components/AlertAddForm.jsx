// // // src/features/alerts/components/AddAlertForm.jsx
// // import React, { useState } from "react";
// // import { useAlerts } from "../hooks/useAlerts";

// // const AddAlertForm = ({ productId, onSuccess }) => {
// //   const [targetPrice, setTargetPrice] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const { addAlert } = useAlerts();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     if (!targetPrice || targetPrice <= 0) {
// //       setError("Enter a valid price");
// //       return;
// //     }
// //     setLoading(true);
// //     const res = await addAlert(productId, Number(targetPrice));
// //     setLoading(false);
// //     if (res.success) {
// //       onSuccess && onSuccess(res.data);
// //       setTargetPrice("");
// //       alert("Alert created successfully");
// //     } else {
// //       setError(res.error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
// //       <input
// //         type="number"
// //         value={targetPrice}
// //         onChange={(e) => setTargetPrice(e.target.value)}
// //         placeholder="Target Price"
// //         className="px-3 py-2 rounded border border-gray-400 focus:outline-none"
// //       />
// //       <button
// //         type="submit"
// //         disabled={loading}
// //         className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
// //       >
// //         {loading ? "Adding..." : "Add Alert"}
// //       </button>
// //       {error && <p className="text-red-500 text-sm">{error}</p>}
// //     </form>
// //   );
// // };

// // export default AddAlertForm;


// import React, { useState } from "react";
// import { useAlerts } from "../hooks/useAlerts";

// const AddAlertForm = ({ productId, onSuccess }) => {
//   const [targetPrice, setTargetPrice] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { addAlert } = useAlerts();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!targetPrice || targetPrice <= 0) {
//       setError("Enter a valid target price");
//       return;
//     }

//     setLoading(true);
//     const res = await addAlert({ productId, targetPrice: Number(targetPrice) });
//     setLoading(false);

//     if (res.success) {
//       onSuccess && onSuccess(res.data);
//       setTargetPrice("");
//       alert("Alert created successfully!");
//     } else {
//       setError(res.error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
//       <input
//         type="number"
//         value={targetPrice}
//         onChange={(e) => setTargetPrice(e.target.value)}
//         placeholder="Target Price"
//         className="px-3 py-2 rounded border border-gray-400 focus:outline-none"
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
//       >
//         {loading ? "Adding..." : "Add Alert"}
//       </button>
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//     </form>
//   );
// };

// export default AddAlertForm;


// src/features/alerts/components/AddAlertForm.jsx
import React, { useState } from "react";
import { useAlerts } from "../hooks/useAlerts";

const AddAlertForm = ({ product, onSuccess, onCancel }) => {
  const [targetPrice, setTargetPrice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { addAlert } = useAlerts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!targetPrice || targetPrice <= 0) {
      setError("Please enter a valid target price");
      return;
    }

    setLoading(true);
    try {
      const res = await addAlert({ 
        productId: product._id, 
        targetPrice: Number(targetPrice) 
      });
      
      if (res.success) {
        onSuccess && onSuccess(res.data);
        setTargetPrice("");
        setError("");
      } else {
        setError(res.error || "Failed to create alert");
      }
    } catch (err) {
      setError("Failed to create alert");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-4">
        Set Price Alert for {product.name}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Target Price (₹)
          </label>
          <input
            type="number"
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
            placeholder="Enter your target price"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            min="1"
            step="0.01"
            required
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-900/30 p-2 rounded border border-red-800">
            {error}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:bg-slate-400 transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-yellow-500 text-slate-900 py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:bg-yellow-300 font-semibold transition-colors"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Alert...
              </span>
            ) : (
              "Create Alert"
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 text-xs text-slate-400">
        <p>🔔 We'll notify you when the price drops below ₹{targetPrice || 'your target'}</p>
      </div>
    </div>
  );
};

export default AddAlertForm;