// src/features/alerts/services/alertAPI.js
import API from "../../../services/api";

export const alertAPI = {
  // Create new alert - POST /api/v1/alerts
  addAlert: async (alertData) => {
    console.log("Adding alert:", alertData);
    const response = await API.post("/alerts", alertData);
    console.log("Added alert response:", response.data);
    return response.data;
  },

  // Get all alerts for current user - GET /api/v1/alerts
  getAlerts: async () => {
    console.log("Fetching user alerts...");
    const response = await API.get("/alerts");
    console.log("Fetched alerts response:", response.data);
    return response.data;
  }
};