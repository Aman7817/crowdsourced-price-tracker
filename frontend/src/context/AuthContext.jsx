// // import { createContext, useEffect, useContext, useState } from "react";
// // import { authAPI } from "../features/auth/services/authAPI";

// // const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => { // ✅ small 'c' children
// //     const [user, setUser] = useState(null);
// //     const [loading, setLoading] = useState(true);

// //     useEffect(() => {
// //         checkAuth();
// //     }, []);

// //     const checkAuth = async () => {
// //         const token = localStorage.getItem("token");
// //         if (token) {
// //             try {
// //                 const userData = await authAPI.getMe();
// //                 setUser(userData);
// //             } catch (error) {
// //                 console.error("Auth check failed:", error);
// //                 localStorage.removeItem('token');
// //                 setUser(null);
// //             }
// //         } else {
// //             setUser(null);
// //         }
// //         setLoading(false);
// //     };

// //     const login = async (email, password) => {
// //         try {
// //             const { user, token } = await authAPI.login({ email, password });
// //             localStorage.setItem("token", token);
// //             setUser(user);
// //             return { success: true };
// //         } catch (error) {
// //             console.error("Login failed:", error);
// //             return { success: false, error: error.message };
// //         }
// //     };

// //     const register = async (userData) => {
// //         try {
// //             const { user, token } = await authAPI.register(userData);
// //             localStorage.setItem("token", token);
// //             setUser(user);
// //             return { success: true };
// //         } catch (error) {
// //             console.error("Registration failed:", error);
// //             return { success: false, error: error.message };
// //         }
// //     };

// //     const logout = () => {
// //         localStorage.removeItem('token');
// //         setUser(null);
// //     };

// //     return (
// //         <AuthContext.Provider value={{ user, login, register, logout, loading }}>
// //             {children} {/* ✅ small 'c' children */}
// //         </AuthContext.Provider>
// //     );
// // };

// // export const useAuth = () => useContext(AuthContext);

// // hooks/useAuthHooks.js
// import { useState, useEffect } from 'react';
// import { authAPI } from '../features/auth/services/authAPI';

// export const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Register function
//   const register = async (userData) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await authAPI.register(userData);
      
//       if (response.token) {
//         localStorage.setItem('token', response.token);
//         setUser(response.user);
//         return { success: true, user: response.user };
//       }
//       return { success: false, error: response.message };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Registration failed';
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await authAPI.login(credentials);
      
//       if (response.token) {
//         localStorage.setItem('token', response.token);
//         setUser(response.user);
//         return { success: true, user: response.user };
//       }
//       return { success: false, error: response.message };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Login failed';
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setError(null);
//   };

//   // Check current user
//   const checkAuth = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {
//         const userData = await authAPI.getMe();
//         setUser(userData);
//       }
//     } catch (error) {
//       localStorage.removeItem('token');
//       setError('Authentication failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update user profile
//   const updateProfile = async (userData) => {
//     try {
//       setLoading(true);
//       const response = await authAPI.updateAccountDetails(userData);
//       setUser(response.user);
//       return { success: true, user: response.user };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Profile update failed';
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Change password
//   const changePassword = async (oldPassword, newPassword) => {
//     try {
//       setLoading(true);
//       const response = await authAPI.changePassword(oldPassword, newPassword);
//       return { success: true, message: response.message };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Password change failed';
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Check authentication on component mount
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return {
//     user,
//     loading,
//     error,
//     register,
//     login,
//     logout,
//     updateProfile,
//     changePassword,
//     setError
//   };
// };

// // Additional auth-related hooks
// export const useAuthCheck = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   useEffect(() => {
//     const checkAuthentication = () => {
//       const token = localStorage.getItem('token');
//       setIsAuthenticated(!!token);
//       setAuthLoading(false);
//     };

//     checkAuthentication();
//   }, []);

//   return { isAuthenticated, authLoading };
// };


// context/AuthContext.js
import React, { createContext, useContext } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth'; // ✅ Correct import path

// Create Context
const AuthContext = createContext();

// Custom Hook for using auth context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;