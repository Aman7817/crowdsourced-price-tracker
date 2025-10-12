// src/features/alerts/hooks/useAlerts.js
import { useState, useEffect } from "react";
import { alertAPI } from "../services/alertAPI";
import { useAuthContext } from "../../../context/AuthContext";

export const useAlerts = () => {
  const { user } = useAuthContext();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all alerts for the user
  const getAlerts = async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    try {
      const res = await alertAPI.getAlerts();
      console.log("Alerts response:", res);
      
      if (res && res.data) {
        setAlerts(res.data);
      } else {
        setAlerts([]);
      }
    } catch (err) {
      console.error("Error fetching alerts:", err);
      setError(err.response?.data?.message || err.message || "Failed to fetch alerts");
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const addAlert = async (alertData) => {
    if (!user) {
      return { success: false, error: "User not logged in" };
    }
    
    setLoading(true);
    setError(null);
    try {
      const res = await alertAPI.addAlert(alertData);
      console.log("Add alert response:", res);
      
      if (res && res.data) {
        setAlerts(prev => [...prev, res.data]);
        return { success: true, data: res.data };
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Error adding alert:", err);
      const errorMsg = err.response?.data?.message || err.message || "Failed to create alert";
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlerts();
  }, [user]);

  return { 
    alerts, 
    loading, 
    error, 
    addAlert, 
    getAlerts, 
    setAlerts 
  };
};