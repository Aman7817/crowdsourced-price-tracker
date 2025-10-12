// // src/features/products/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { productAPI } from '../services/ProductAPI';

// export const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       console.log("Fetching products...");

//       const data = await productAPI.getUserProducts();
//       consol.log("Fetched products:", data);
//       setProducts(Array.isArray(data.products)? data.products : []);
      
//     } catch (err) {
//       setError(err.message);
//       setProducts([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addProduct = async (productData) => {
//     setLoading(true);
//     try {
//       const newProduct = await productAPI.addProduct(productData);
//       // setProducts(prev => [...prev, newProduct]);
//       if(newProduct.product) {
//         setProducts(prev => [...prev, newProduct.product]);
//         return newProduct.product;
//       }
//       throw new Error("Failed to add product");
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   const removeProduct = async (productId) => {
//     try {
//       await productAPI.removeProduct(productId);
//       setProducts(prev => prev.filter(p => p._id !== productId));
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return { 
//     products, 
//     loading, 
//     error, 
//     addProduct, 
//     removeProduct, 
//     refetch: fetchProducts 
//   };
// };


// src/features/products/hooks/useProducts.js
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log('Fetching products...');

      const data = await productAPI.getUserProducts();
       // DEBUG: Exact response structure देखें
       console.log(data.data.dats);
      console.log('🔍 RAW API RESPONSE:', data);
      console.log('🔍 Response keys:', Object.keys(data));
    
      console.log('API Response:', data);

      // Fix: Check multiple possible response structures
      let productsArray = [];
      
      if (Array.isArray(data)) {
        productsArray = data;
      } else if (Array.isArray(data.products)) {
        productsArray = data.products;
      } else if (Array.isArray(data.data)) {
        productsArray = data.data;
      } else if (data && data.data && Array.isArray(data.data.products)) {
        productsArray = data.data.products;
      } else {
        console.warn('Unexpected API response structure:', data);
        productsArray = [];
      }
      
      console.log('Processed products:', productsArray);
      setProducts(productsArray);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (productData) => {
    setLoading(true);
    try {
      console.log('Adding product:', productData);
      const response = await productAPI.addProduct(productData);
      console.log('Add product response:', response);

      // FIX: Use response.data instead of response.product
      if (response.data) {
        setProducts(prev => [...prev, response.data]);
        return response.data;
      } else if (response.product) {
        setProducts(prev => [...prev, response.product]);
        return response.product;
      } else {
        throw new Error("Failed to add product - invalid response structure");
      }
    } catch (err) {
      console.error('Add product error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
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