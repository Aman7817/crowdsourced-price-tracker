// // // import React, { useState, useEffect, useContext } from "react";
// // // import AuthContext from "../../context/AuthContext";
// // // import axios from "axios";

// // // const Profile = () => {
// // //   const [activeTab, setActiveTab] = useState("account");
// // //   const [userData, setUserData] = useState({});
// // //   const { user } = useContext(AuthContext);

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const res = await axios.get("/api/v1/user/profile", {
// // //           headers: { Authorization: `Bearer ${user?.token}` },
// // //         });
// // //         setUserData(res.data.user);
// // //       } catch (err) {
// // //         console.error("Error fetching profile:", err);
// // //       }
// // //     };

// // //     fetchProfile();
// // //   }, [user]);

// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.put("/api/v1/user/update", userData, {
// // //         headers: { Authorization: `Bearer ${user?.token}` },
// // //       });
// // //       alert("Profile updated successfully!");
// // //     } catch (err) {
// // //       console.error("Error updating profile:", err);
// // //     }
// // //   };

// // //   const handlePasswordChange = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.put("/api/v1/user/change-password", {
// // //         oldPassword: e.target.oldPassword.value,
// // //         newPassword: e.target.newPassword.value,
// // //       }, {
// // //         headers: { Authorization: `Bearer ${user?.token}` },
// // //       });
// // //       alert("Password changed successfully!");
// // //     } catch (err) {
// // //       console.error("Error changing password:", err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
// // //       <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
// // //         <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>

// // //         <div className="flex justify-center space-x-4 mb-6">
// // //           <button
// // //             onClick={() => setActiveTab("account")}
// // //             className={`px-4 py-2 rounded-lg font-medium transition-all ${
// // //               activeTab === "account" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
// // //             }`}
// // //           >
// // //             Update Account
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("password")}
// // //             className={`px-4 py-2 rounded-lg font-medium transition-all ${
// // //               activeTab === "password" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
// // //             }`}
// // //           >
// // //             Change Password
// // //           </button>
// // //         </div>

// // //         {activeTab === "account" ? (
// // //           <form className="space-y-4" onSubmit={handleUpdate}>
// // //             <div>
// // //               <label className="block mb-1 text-sm">Name</label>
// // //               <input
// // //                 type="text"
// // //                 value={userData.name || ""}
// // //                 onChange={(e) => setUserData({ ...userData, name: e.target.value })}
// // //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-1 text-sm">Email</label>
// // //               <input
// // //                 type="email"
// // //                 value={userData.email || ""}
// // //                 onChange={(e) => setUserData({ ...userData, email: e.target.value })}
// // //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// // //               />
// // //             </div>
// // //             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
// // //               Save Changes
// // //             </button>
// // //           </form>
// // //         ) : (
// // //           <form className="space-y-4" onSubmit={handlePasswordChange}>
// // //             <div>
// // //               <label className="block mb-1 text-sm">Current Password</label>
// // //               <input
// // //                 type="password"
// // //                 name="oldPassword"
// // //                 placeholder="Enter current password"
// // //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// // //               />
// // //             </div>
// // //             <div>
// // //               <label className="block mb-1 text-sm">New Password</label>
// // //               <input
// // //                 type="password"
// // //                 name="newPassword"
// // //                 placeholder="Enter new password"
// // //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// // //               />
// // //             </div>
// // //             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
// // //               Update Password
// // //             </button>
// // //           </form>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;





// // import React, { useState, useEffect, useContext } from "react";
// // import AuthContext from "../../context/AuthContext";
// // import axios from "axios";

// // const Profile = () => {
// //   const { user } = useContext(AuthContext);
// //   const [userData, setUserData] = useState({});
// //   const [activeTab, setActiveTab] = useState("account");
// //   const [loading, setLoading] = useState(true);
// //   const [message, setMessage] = useState(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       if (!user) return;
// //       setLoading(true);
// //       try {
// //         const res = await axios.get("/api/v1/user/me", {
// //           headers: { Authorization: `Bearer ${user.token}` },
// //         });
// //         setUserData(res.data.user || {});
// //       } catch (err) {
// //         console.error("Error fetching profile:", err);
// //         setMessage({ type: "error", text: "Failed to load profile." });
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProfile();
// //   }, [user]);

// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put("/api/v1/user/update-account", userData, {
// //         headers: { Authorization: `Bearer ${user.token}` },
// //       });
// //       setMessage({ type: "success", text: "Profile updated successfully!" });
// //     } catch (err) {
// //       console.error(err);
// //       setMessage({ type: "error", text: "Failed to update profile." });
// //     }
// //   };

// //   const handlePasswordChange = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put(
// //         "/api/v1/user/change-password",
// //         {
// //           oldPassword: e.target.oldPassword.value,
// //           newPassword: e.target.newPassword.value,
// //         },
// //         { headers: { Authorization: `Bearer ${user.token}` } }
// //       );
// //       setMessage({ type: "success", text: "Password changed successfully!" });
// //       e.target.reset();
// //     } catch (err) {
// //       console.error(err);
// //       setMessage({ type: "error", text: "Failed to change password." });
// //     }
// //   };

// //   if (!user) return <div className="text-white text-center mt-10">Please login to view profile</div>;
// //   if (loading) return <div className="text-white text-center mt-10">Loading profile...</div>;

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
// //       <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>

// //         {message && (
// //           <div
// //             className={`p-3 mb-4 rounded ${
// //               message.type === "success" ? "bg-green-600" : "bg-red-600"
// //             }`}
// //           >
// //             {message.text}
// //           </div>
// //         )}

// //         <div className="flex justify-center space-x-4 mb-6">
// //           <button
// //             onClick={() => setActiveTab("account")}
// //             className={`px-4 py-2 rounded-lg font-medium transition-all ${
// //               activeTab === "account" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
// //             }`}
// //           >
// //             Update Account
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("password")}
// //             className={`px-4 py-2 rounded-lg font-medium transition-all ${
// //               activeTab === "password" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
// //             }`}
// //           >
// //             Change Password
// //           </button>
// //         </div>

// //         {activeTab === "account" ? (
// //           <form className="space-y-4" onSubmit={handleUpdate}>
// //             <div>
// //               <label className="block mb-1 text-sm">Name</label>
// //               <input
// //                 type="text"
// //                 value={userData.name || ""}
// //                 onChange={(e) => setUserData({ ...userData, name: e.target.value })}
// //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-1 text-sm">Email</label>
// //               <input
// //                 type="email"
// //                 value={userData.email || ""}
// //                 onChange={(e) => setUserData({ ...userData, email: e.target.value })}
// //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// //               />
// //             </div>
// //             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
// //               Save Changes
// //             </button>
// //           </form>
// //         ) : (
// //           <form className="space-y-4" onSubmit={handlePasswordChange}>
// //             <div>
// //               <label className="block mb-1 text-sm">Current Password</label>
// //               <input
// //                 type="password"
// //                 name="oldPassword"
// //                 placeholder="Enter current password"
// //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// //               />
// //             </div>
// //             <div>
// //               <label className="block mb-1 text-sm">New Password</label>
// //               <input
// //                 type="password"
// //                 name="newPassword"
// //                 placeholder="Enter new password"
// //                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
// //               />
// //             </div>
// //             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
// //               Update Password
// //             </button>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;



// import React, { useState, useEffect, useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import axios from "axios";

// const Profile = () => {
//   const { user } = useContext(AuthContext);
//   const [userData, setUserData] = useState({});
//   const [activeTab, setActiveTab] = useState("account");
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState(null);

//   // Fetch user profile
//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!user) return;
//       setLoading(true);
//       try {
//         const res = await axios.get("/api/v1/user/me", {
//           headers: { Authorization: `Bearer ${user.token}` },
//         });
//         setUserData(res.data.user || {});
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//         setMessage({ type: "error", text: "Failed to load profile." });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [user]);

//   // Update account
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("/api/v1/user/update-account", userData, {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });
//       setMessage({ type: "success", text: "Profile updated successfully!" });
//     } catch (err) {
//       console.error(err);
//       setMessage({ type: "error", text: "Failed to update profile." });
//     }
//   };

//   // Change password
//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         "/api/v1/user/change-password",
//         {
//           oldPassword: e.target.oldPassword.value,
//           newPassword: e.target.newPassword.value,
//         },
//         { headers: { Authorization: `Bearer ${user.token}` } }
//       );
//       setMessage({ type: "success", text: "Password changed successfully!" });
//       e.target.reset();
//     } catch (err) {
//       console.error(err);
//       setMessage({ type: "error", text: "Failed to change password." });
//     }
//   };

//   if (!user) return <div className="text-white text-center mt-10">Please login to view profile</div>;
//   if (loading) return <div className="text-white text-center mt-10">Loading profile...</div>;

//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
//       <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>

//         {message && (
//           <div
//             className={`p-3 mb-4 rounded ${
//               message.type === "success" ? "bg-green-600" : "bg-red-600"
//             }`}
//           >
//             {message.text}
//           </div>
//         )}

//         <div className="flex justify-center space-x-4 mb-6">
//           <button
//             onClick={() => setActiveTab("account")}
//             className={`px-4 py-2 rounded-lg font-medium transition-all ${
//               activeTab === "account" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
//             }`}
//           >
//             Update Account
//           </button>
//           <button
//             onClick={() => setActiveTab("password")}
//             className={`px-4 py-2 rounded-lg font-medium transition-all ${
//               activeTab === "password" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"
//             }`}
//           >
//             Change Password
//           </button>
//         </div>

//         {activeTab === "account" ? (
//           <form className="space-y-4" onSubmit={handleUpdate}>
//             <div>
//               <label className="block mb-1 text-sm">First Name</label>
//               <input
//                 type="text"
//                 value={userData.firstName ?? ""}
//                 onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
//                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">Last Name</label>
//               <input
//                 type="text"
//                 value={userData.lastName ?? ""}
//                 onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
//                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">Email</label>
//               <input
//                 type="email"
//                 value={userData.email ?? ""}
//                 onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
//               />
//             </div>
//             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
//               Save Changes
//             </button>
//           </form>
//         ) : (
//           <form className="space-y-4" onSubmit={handlePasswordChange}>
//             <div>
//               <label className="block mb-1 text-sm">Current Password</label>
//               <input
//                 type="password"
//                 name="oldPassword"
//                 placeholder="Enter current password"
//                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">New Password</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 placeholder="Enter new password"
//                 className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
//               />
//             </div>
//             <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
//               Update Password
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import API from "../../services/api";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "" });
  const [activeTab, setActiveTab] = useState("account");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);


  // Axios instance with Authorization header
  // const api = axios.create({
  //   baseURL: process.env.VITE_API_URL, // proxy will forward to backend
  //   headers: { Authorization: `Bearer ${user?.token}` },
  // });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const res = await API.get("/users/me");
        if (res.data?.user) {
          setUserData({
            firstName: res.data.user.firstName || "",
            lastName: res.data.user.lastName || "",
            email: res.data.user.email || "",
          });
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setMessage({ type: "error", text: "Failed to load profile." });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put("/users/update-account", userData);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to update profile." });
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await api.put("/user/change-password", {
        oldPassword: e.target.oldPassword.value,
        newPassword: e.target.newPassword.value,
      });
      setMessage({ type: "success", text: "Password changed successfully!" });
      e.target.reset();
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Failed to change password." });
    }
  };

  if (!user) return <div className="text-white text-center mt-10">Please login to view profile</div>;
  if (loading) return <div className="text-white text-center mt-10">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Settings</h2>

        {message && (
          <div className={`p-3 mb-4 rounded ${message.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {message.text}
          </div>
        )}

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("account")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "account" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            Update Account
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "password" ? "bg-indigo-600" : "bg-gray-700 hover:bg-gray-600"}`}
          >
            Change Password
          </button>
        </div>

        {activeTab === "account" ? (
          <form className="space-y-4" onSubmit={handleUpdate}>
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block mb-1 text-sm">First Name</label>
                <input
                  type="text"
                  value={userData.firstName}
                  onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm">Last Name</label>
                <input
                  type="text"
                  value={userData.lastName}
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
              />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
              Save Changes
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handlePasswordChange}>
            <div>
              <label className="block mb-1 text-sm">Current Password</label>
              <input
                type="password"
                name="oldPassword"
                placeholder="Enter current password"
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white outline-none"
              />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold">
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
