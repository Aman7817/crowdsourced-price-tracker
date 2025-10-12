import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend API for form submission
    setMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400">Contact Us</h1>

          {message && (
            <p className="mb-4 p-3 bg-green-600 rounded">{message}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                rows={5}
                required
              />
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
