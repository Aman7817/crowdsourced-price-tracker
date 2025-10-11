// src/features/products/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { productAPI } from '../services/ProductAPI';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productAPI.getUserProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData) => {
    try {
      const newProduct = await productAPI.addProduct(productData);
      setProducts(prev => [...prev, newProduct]);
      return newProduct;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeProduct = async (productId) => {
    try {
      await productAPI.removeProduct(productId);
      setProducts(prev => prev.filter(p => p._id !== productId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { 
    products, 
    loading, 
    error, 
    addProduct, 
    removeProduct, 
    refetch: fetchProducts 
  };
};