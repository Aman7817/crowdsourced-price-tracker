// src/features/products/services/ProductAPI.js
import API from "../../../services/api";

export const productAPI = {
    //  POST: /products/add-product
    addProduct: async (productData) => {
        console.log("Adding product:", productData);
        const response = await API.post("/product/add-product", productData);
        console.log("Added product response:", response.data);
        return response.data;
    },

    //  GET: /products/all-products  
    getUserProducts: async () => {
        console.log("Fetching user products...");
        const response = await API.get("/product/all-products");
        console.log("Fetched products response:", response.data);
        return response.data;
    },

    //  GET: /products/product/:id
    getProductById: async (productId) => {
        const response = await API.get(`/product/product/${productId}`);
        return response.data;
    },

    //  DELETE: /products/delete/:id (Backend fix ke baath)
    removeProduct: async (productId) => {
        console.log("Removing product with ID:", productId);
        const response = await API.delete(`/product/delete/${productId}`);
        console.log("Remove product response:", response.data);
        return response.data;
    },

    //  POST: /products/scan/:id (Backend fix ke baath)
    scanProduct: async (productId) => {
        console.log("Scanning product with ID:", productId);
        const response = await API.post(`/product/scan/${productId}`);
        console.log("Scanned product response:", response.data);
        return response.data;
    },

    //  GET: /products/history/:id (Backend fix ke baath)
    getPriceHistory: async (productId) => {
        const response = await API.get(`/product/history/${productId}`);
        return response.data;
    }
}