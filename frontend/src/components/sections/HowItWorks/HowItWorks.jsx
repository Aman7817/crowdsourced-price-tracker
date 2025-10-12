import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Bell, TrendingDown } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
    title: "Add a Product",
    desc: "Paste the product URL from any supported website and set your desired target price.",
  },
  {
    icon: <Bell className="w-10 h-10 text-yellow-400" />,
    title: "We Track Prices 24/7",
    desc: "Our system automatically monitors the product for any price drops or changes.",
  },
  {
    icon: <TrendingDown className="w-10 h-10 text-yellow-400" />,
    title: "Get Instant Alerts",
    desc: "As soon as the price falls below your target, you’ll receive a notification instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 text-white py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          💡 How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
