// src/features/auth/components/SignupForm.jsx
import React, { useState } from 'react';
import { useNavigate, Link,useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    AgreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

   console.log('Current location:', location.pathname);
  console.log('Navigate function available:', !!navigate);
  const { register, loading, error } = useAuthContext();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.FirstName.trim()) {
      newErrors.FirstName = 'First name is required';
    }
    
    if (!formData.LastName.trim()) {
      newErrors.LastName = 'Last name is required';
    }
    
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email address is invalid';
    }
    
    if (!formData.Password) {
      newErrors.Password = 'Password is required';
    } else if (formData.Password.length < 8) {
      newErrors.Password = 'Password must be at least 8 characters';
    }
    
    if (!formData.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Please confirm your password';
    } else if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match';
    }
    
    if (!formData.AgreeToTerms) {
      newErrors.AgreeToTerms = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // ✅ Important
    console.log('=== FORM SUBMIT START ===');
    if (!validateForm()) {
      return;
    }
    
    const userData = {
      FirstName: formData.FirstName,
      LastName: formData.LastName,
      Email: formData.Email,
      Password: formData.Password
    };
    
    console.log('Sending registration data:', userData);
    
    const result = await register(userData);
    
    if (result.success) {
      console.log('Before navigation');
      alert('Registration successful!');
      navigate('/home'); // Redirect to home or dashboard
      console.log('After navigation');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-300">Join us to start tracking prices</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
              <input
                name="FirstName"
                type="text"
                value={formData.FirstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.FirstName ? 'border-red-500' : 'border-white/10'}`}
                placeholder="John"
              />
              {errors.FirstName && <p className="mt-1 text-sm text-red-400">{errors.FirstName}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
              <input
                name="LastName"
                type="text"
                value={formData.LastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.LastName ? 'border-red-500' : 'border-white/10'}`}
                placeholder="Doe"
              />
              {errors.LastName && <p className="mt-1 text-sm text-red-400">{errors.LastName}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input
              name="Email"
              type="email"
              value={formData.Email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.Email ? 'border-red-500' : 'border-white/10'}`}
              placeholder="john@example.com"
            />
            {errors.Email && <p className="mt-1 text-sm text-red-400">{errors.Email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <div className="relative">
              <input
                name="Password"
                type={showPassword ? "text" : "password"}
                value={formData.Password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.Password ? 'border-red-500' : 'border-white/10'}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.Password && <p className="mt-1 text-sm text-red-400">{errors.Password}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                name="ConfirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${errors.ConfirmPassword ? 'border-red-500' : 'border-white/10'}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.ConfirmPassword && <p className="mt-1 text-sm text-red-400">{errors.ConfirmPassword}</p>}
          </div>
          
          <div className="flex items-center">
            <input
              name="AgreeToTerms"
              type="checkbox"
              checked={formData.AgreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded bg-white/5 border-white/10 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-slate-300">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.AgreeToTerms && <p className="text-sm text-red-400">{errors.AgreeToTerms}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </div>
            ) : 'Create Account'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;