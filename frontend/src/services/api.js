import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://c3nm8b4bv5.execute-api.ap-south-1.amazonaws.com/api/v1',
  

  withCredentials: true, // Include cookies in requests
});

// Request interceptor: automatically attach token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle 401 globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // Use history push instead of window.location.href if using react-router
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default API;



// import axios from "axios";

// const API = axios.create({
//     baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1'

// });

// API.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if(token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config
// })

// API.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if(error.response.status === 401) {
//             localStorage.removeItem("token");
//             window.location.href = "/login";
//         }
//         return Promise.reject(error);
//     }
// )

// export default API;