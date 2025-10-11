// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext"; // ✅ Add this
// import Home from "./pages/Home";
// import LoginForm from "./features/auth/components/LoginForm";
// import Signup from "./features/auth/components/SignupForm";


// function App() {
//   return (
//     <AuthProvider> {/* ✅ Wrap with AuthProvider */}
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/sign-up" element={<Signup />} />
//           </Routes>

//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";
// import Home from "./pages/Home";
// import LoginForm from "./features/auth/components/LoginForm";
// import SignupForm from "./features/auth/components/SignupForm";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/sign-up" element={<SignupForm />} />
//             {/* ✅ Add register route if needed */}
//             <Route path="/register" element={<SignupForm />} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // ✅ Import from context folder
import Home from "./pages/Home";
import LoginForm from "./features/auth/components/LoginForm";
import SignupForm from "./features/auth/components/SignupForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/register" element={<SignupForm />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;