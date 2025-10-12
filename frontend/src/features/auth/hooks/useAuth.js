// hooks/useAuthHooks.js
import { useState, useEffect } from 'react';
import {authAPI} from '../services/authAPI'

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authAPI.register(userData);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        setUser(response.user);
        return { success: true, user: response.user };
      }
      return { success: false, error: response.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      let loginData = credentials;
      if(typeof credentials === 'string') {
        loginData = {
          Email: credentials,
          Password: arguments[1]
        }
      }
      const response = await authAPI.login(loginData);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        setUser(response.user);
        return { success: true, user: response.user };
      }
      return { success: false, error: response.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setError(null);
  };

  // Check current user
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await authAPI.getMe(); // API call returns { user: {...} }
        setUser(response.user || response); // ensure user object is set
      }
    } catch (error) {
      localStorage.removeItem('token');
      setUser(null);
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };


  // Update user profile
  const updateProfile = async (userData) => {
    try {
      setLoading(true);
      const response = await authAPI.updateAccountDetails(userData);
      setUser(response.user);
      return { success: true, user: response.user };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Profile update failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const changePassword = async (oldPassword, newPassword) => {
    try {
      setLoading(true);
      const response = await authAPI.changePassword(oldPassword, newPassword);
      return { success: true, message: response.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Password change failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Check authentication on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    updateProfile,
    changePassword,
    setError
  };
};

// Additional auth-related hooks
export const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      setAuthLoading(false);
    };

    checkAuthentication();
  }, []);

  return { isAuthenticated, authLoading };
};