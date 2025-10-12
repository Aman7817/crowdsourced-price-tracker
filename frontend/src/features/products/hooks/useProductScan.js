// hooks/useProductScan.js
import { useState } from 'react';
import { productAPI } from '../services/ProductAPI';

export const useProductScan = () => {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const scanProduct = async (productId) => {
    setScanning(true);
    setScanResult(null);
    
    try {
      const result = await productAPI.scanProduct(productId);
      setScanResult({ success: true, data: result });
      return result;
    } catch (error) {
      setScanResult({ success: false, error: error.message });
      throw error;
    } finally {
      setScanning(false);
    }
  };

  return { scanning, scanResult, scanProduct };
};