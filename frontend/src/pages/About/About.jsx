import React from "react";

const About = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">About Us</h1>
                <p className="text-gray-300 mb-4">
                Welcome to our platform! We are dedicated to helping users track
                prices efficiently and make informed purchasing decisions.
                </p>
                <p className="text-gray-300 mb-4">
                Our mission is to provide real-time alerts and accurate product
                tracking to save both time and money for our users.
                </p>
                <p className="text-gray-300">
                Built with love and modern web technologies, we aim to make your
                shopping experience smarter and hassle-free.
                </p>
            </div>
        </div>
    </Layout>
  );
};

export default About;
