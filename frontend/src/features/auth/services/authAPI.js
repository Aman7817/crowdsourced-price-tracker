import { use } from "react";
import API from "../../../services/api";

export const authAPI = {
    // post /api/v1/users/register

    register: async (userData) => {
        const response = await API.post("/users/register",userData);
        return response.data;
    },

    // post /api/v1/users/login
    login: async (Credentials) => {
        const response = await API.post("/users/login",Credentials);
        return response.data;
    },

    // get /api/v1/users/me (JWT Protected Route)
    getMe: async () => {
        const response = await API.get("/users/me");
        return response.data;
    },
    // post /api/v1/users/logout
    logout: async () => {
        const response = await API.post("/users/logout");
        return response.data;
    },

    // put /api/v1/users/update-account
    updateAccountDetails: async (userData) => {
        const response = await API.put("/users/update-account", userData);
        return response.data;
    },
    // put /api/v1/users/change-password
    changePassword: async (oldPassword, newPassword) => {
        const response = await API.put("/users/change-password", {oldPassword, newPassword});
        return response.data;
    },
    



}