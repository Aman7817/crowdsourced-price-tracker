

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

const Navbar = () => {
  const { user, logout, loading } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) {
    return <nav className="bg-gray-900 p-4 text-white">Loading...</nav>;
  }

  return (
    <nav className="bg-gray-900 shadow-lg border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide hover:text-yellow-300 transition-colors">
                PriceTracker
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-200 hover:text-yellow-400 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-gray-200 hover:text-yellow-400 transition-colors">Dashboard</Link>
            <Link to="/add-product" className="text-gray-200 hover:text-yellow-400 transition-colors">Add Product</Link>
            <Link to="/alerts" className="text-gray-200 hover:text-yellow-400 transition-colors">Alerts</Link>
            <Link to="/about" className="text-gray-200 hover:text-yellow-400 transition-colors">About</Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
                >
                  Hello, {user.name?.split(" ")[0] || "User"}
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 font-semibold px-3 py-1 rounded transition-all"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-200 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 hover:text-gray-900 font-medium transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-400 text-gray-900 font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none text-2xl"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/add-product"
            className="block text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Add Product
          </Link>
          <Link
            to="/alerts"
            className="block text-gray-200 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Alerts
          </Link>
          <Link
            to="/about"
            className="block text-gray-200 hover:text-yellow-400 transition-colors"   
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          {/* Mobile Auth */}
          {user ? (
            <div className="mt-3 flex flex-col space-y-2">
              <Link
                to="/profile"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hello, {user.name?.split(" ")[0] || "User"}
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded font-semibold transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-3 flex flex-col space-y-2">
              <Link
                to="/login"
                className="text-gray-200 border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 hover:text-gray-900 font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 text-gray-900 font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../../context/AuthContext';

// const Navbar = () => {
//   const { user, logout, loading } = useAuthContext();
//   const [isOpen, setIsOpen] = useState(false);

//   if (loading) {
//     return <nav className="bg-gray-900 p-4 text-white">Loading...</nav>;
//   }

//   return (
//     <nav className="bg-gray-900 shadow-lg border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/">
//               <h1 className="text-2xl font-bold text-yellow-400">PriceTracker</h1>
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
//               Home
//             </Link>
            
//             <Link to="/dashboard" className="text-white hover:text-yellow-400 transition-colors">
//               Dashboard
//             </Link>
//             <Link to="/add-product" className="text-white hover:text-yellow-400 transition-colors">
//               Add Product
//             </Link>
//             <Link to="/alerts" className="text-white hover:text-yellow-400 transition-colors">
//               Alerts
//             </Link>
//           </div>

//           {/* Auth Section */}
//           <div className="hidden md:flex items-center space-x-4">
//             {user ? (
//               <>
//                 <span className="text-white">Hello, {user.name}</span>
//                 <button
//                   onClick={logout}
//                   className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded transition-colors"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-white border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-500 transition-colors"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none text-2xl"
//             >
//               {isOpen ? '✖' : '☰'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
//           <Link
//             to="/"
//             className="block text-white hover:text-yellow-400 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/products"
//             className="block text-white hover:text-yellow-400 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Products
//           </Link>
//           <Link
//             to="/dashboard"
//             className="block text-white hover:text-yellow-400 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/add-product"
//             className="block text-white hover:text-yellow-400 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Add Product
//           </Link>
//           <Link
//             to="/alerts"
//             className="block text-white hover:text-yellow-400 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             Alerts
//           </Link>

//           {/* Mobile Auth */}
//           {user ? (
//             <div className="mt-2 flex flex-col space-y-2">
//               <span className="text-white">Hello, {user.name}</span>
//               <button
//                 onClick={logout}
//                 className="text-gray-900 bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded transition-colors"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="mt-2 flex flex-col space-y-2">
//               <Link
//                 to="/login"
//                 className="text-white border border-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 hover:text-gray-900 transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-500 transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign Up
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// // const Navbar = () => {
// //   const { user, logout } = useContext(useAuthContext);

// //   return (
// //     <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-2xl font-bold text-indigo-500">
// //           PriceTracker
// //         </Link>

// //         <div className="space-x-6 flex items-center">
// //           <Link to="/" className="hover:text-indigo-400">Home</Link>
// //           {user && <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>}
// //           {user ? (
// //             <>
// //               <Link to="/profile" className="hover:text-indigo-400">
// //                 Hello, {user.name?.split(" ")[0] || "User"}
// //               </Link>
// //               <button
// //                 onClick={logout}
// //                 className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md font-medium"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               <Link to="/login" className="hover:text-indigo-400">Login</Link>
// //               <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md font-medium">Signup</Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
