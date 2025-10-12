import React from "react";

const Terms = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-yellow-400">Terms & Conditions</h1>
                <p className="text-gray-300 mb-4">
                By using this platform, you agree to abide by our terms and
                conditions.
                </p>
                <p className="text-gray-300 mb-4">
                You are responsible for any activity performed under your account.
                </p>
                <p className="text-gray-300 mb-4">
                We reserve the right to modify or discontinue services at any time.
                </p>
                <p className="text-gray-300">
                Please read our privacy policy to understand how we handle your data.
                </p>
            </div>
        </div>
    </Layout>
  );
};

export default Terms;
