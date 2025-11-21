

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import LoginForm from "./features/auth/components/LoginForm";
import SignupForm from "./features/auth/components/SignupForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProductPage from "./pages/product/addProduct";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import Alerts from "./pages/Alerts/Alerts"
import Profile from "./pages/Profile/Profile"; // ✅ New Import
import Navbar from "./components/layout/Navbar/Navbar"; // ✅ New Import
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Term";
import PrivacyPolicy from "./pages/PrivacyPolciy/PrivacyPolicy";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar /> {/* Navbar ab har page pe dikhega */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />


            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-product"
              element={
                <ProtectedRoute>
                  <AddProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alerts"
              element={
                <ProtectedRoute>
                  <Alerts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;
