import React from "react";
import Layout from "../../components/layout/Layout";
const PrivacyPolicy = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Privacy Policy</h1>
                <p className="text-gray-300 mb-4">
                We value your privacy. Any personal information collected on our
                platform is used only to provide better service and improve your
                experience.
                </p>
                <p className="text-gray-300 mb-4">
                Your data will never be shared with third parties without your consent.
                </p>
                <p className="text-gray-300">
                Cookies may be used for authentication and to track usage patterns
                for analytics purposes.
                </p>
            </div>
        </div>
    </Layout>
    );
};

export default PrivacyPolicy;
