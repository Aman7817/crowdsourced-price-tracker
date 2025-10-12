// import React from "react";

// const About = () => {
//   return (
//     <Layout>
//         <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
//         <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
//                 <h1 className="text-3xl font-bold mb-6 text-yellow-400">About Us</h1>
//                 <p className="text-gray-300 mb-4">
//                 Welcome to our platform! We are dedicated to helping users track
//                 prices efficiently and make informed purchasing decisions.
//                 </p>
//                 <p className="text-gray-300 mb-4">
//                 Our mission is to provide real-time alerts and accurate product
//                 tracking to save both time and money for our users.
//                 </p>
//                 <p className="text-gray-300">
//                 Built with love and modern web technologies, we aim to make your
//                 shopping experience smarter and hassle-free.
//                 </p>
//             </div>
//         </div>
//     </Layout>
//   );
// };

// export default About;



import React from "react";
import Layout from "../../components/layout/Layout";
const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-yellow-400">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to our platform! We are dedicated to helping users track
                  prices efficiently and make informed purchasing decisions through
                  cutting-edge technology and user-friendly interfaces.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-400">Real-Time Alerts</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to provide real-time alerts and accurate product
                  tracking to save both time and money for our users with instant
                  notifications and smart price predictions.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">Real-time Monitoring</div>
                </div>
                <div className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">50k+</div>
                  <div className="text-gray-300">Products Tracked</div>
                </div>
                <div className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10k+</div>
                  <div className="text-gray-300">Happy Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">What We Offer</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🔔", title: "Smart Alerts", desc: "Get notified when prices drop to your desired level" },
                { icon: "📊", title: "Price History", desc: "View comprehensive price trends and analytics" },
                { icon: "🛒", title: "Multi-Store", desc: "Track products across multiple retailers" },
                { icon: "📱", title: "Mobile Friendly", desc: "Access your trackers on any device" },
                { icon: "🔒", title: "Secure & Private", desc: "Your data is always protected" },
                { icon: "💡", title: "AI Powered", desc: "Smart predictions and recommendations" }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-yellow-400">{feature.title}</h4>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-8 rounded-2xl border border-yellow-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Saving?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Built with love and modern web technologies, we aim to make your
                shopping experience smarter and hassle-free. Join thousands of smart shoppers today!
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;