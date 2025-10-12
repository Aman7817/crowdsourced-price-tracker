// import React from 'react';
// import Button from '../../UI/Button/Button';

// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Never Overpay Again
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
//             Track prices from your favorite stores and get instant notifications when products drop below your target price.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button 
//               variant="secondary" 
//               size="large"
//               className="bg-white text-blue-600 hover:bg-gray-100"
//               href="/register"
//             >
//               Start Tracking Free
//             </Button>
//             <Button 
//               variant="outline" 
//               size="large"
//               className="border-white text-white hover:bg-white hover:text-blue-600"
//               href="/how-it-works"
//             >
//               How It Works
//             </Button>
//           </div>
//         </div>
        
//         {/* Demo Image/Illustration */}
//         <div className="mt-12 max-w-4xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//             <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
//               <p className="text-gray-400">Product Dashboard Preview</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Track Product Prices <br />
            <span className="text-yellow-400">Smarter & Faster</span>
          </motion.h1>

          <motion.p 
            className="text-gray-300 text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop wasting time checking prices manually! Get real-time alerts when prices drop on your favorite websites.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              to="/add-product"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Track a Product
            </Link>
            <Link
              to="/dashboard"
              className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition-transform transform hover:scale-105"
            >
              Go to Dashboard
            </Link>
          </motion.div>
        </div>

        {/* Right Image / Illustration */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://illustrations.popsy.co/gray/online-shopping.svg"
            alt="Price Tracker Illustration"
            className="w-96 md:w-[450px] drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
