import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Clock, BellRing } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-10 h-10 text-yellow-400" />,
    title: "Trusted & Secure",
    desc: "We ensure complete privacy of your product data and never share it with third parties.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "Lightning Fast Updates",
    desc: "Our smart scraper instantly detects any price change — no delays, no missed deals.",
  },
  {
    icon: <Clock className="w-10 h-10 text-yellow-400" />,
    title: "24/7 Monitoring",
    desc: "We keep tracking prices even when you’re offline, so you never miss a drop.",
  },
  {
    icon: <BellRing className="w-10 h-10 text-yellow-400" />,
    title: "Instant Alerts",
    desc: "As soon as your target price hits, you’ll get notified right away — via email or dashboard.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-950 text-white py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 Why Choose <span className="text-yellow-400">PriceTracker</span>?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-yellow-400/20 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
