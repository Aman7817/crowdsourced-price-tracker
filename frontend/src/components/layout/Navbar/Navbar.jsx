import React from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

// ... existing imports
const Navbar = () => {
  const { user, logout, loading } = useAuthContext();

  if (loading) {
    return <nav>Loading...</nav>;
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">PriceTracker</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link to="/alerts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Alerts
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">Hello, {user.name}</span>
                <button 
                  onClick={logout}
                  className="text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;