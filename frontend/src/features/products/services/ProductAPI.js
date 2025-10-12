// import API from "../../../services/api";

// export const productAPI = {
//     // post /api/v1/products/add
//     addProduct: async (productData) => {
//         console.log("Adding product:", productData);
//         const response = await API.post("products/add-product", productData);
//         console.log("Added product response:", response.data);
//         return response.data;
//     },
//     // get /api/v1/products
//     getUserProducts: async () => {
//         console.log("Fetching user products...");
//         const response = await API.get("/products/all-products");
//         console.log("Fetched products response:", response.data);
//         return response.data;
//     },
//     // get /api/v1/products/:id
//     getProductById: async (productId) => {
//         const response = await API.get(`/products/${productId}`);
//         return response.data;
//     },
//     // delete /api/v1/products/:id
//     removeProduct: async (productId) => {
//         console.log("Removing product with ID:", productId);
//         const response = await API.delete(`/products/${productId}`);
//         console.log("Remove product response:", response.data);
//         return response.data;
//     },
//     // post /api/v1/products/scan
//     scanProduct: async (productId) => {
//         console.log("Scanning product with ID:", productId);
//         const response = await API.post(`/products/${productId}/scan`);
//         console.log("Scanned product response:", response.data);
//         return response.data;
//     },
//     // get /api/v1/products/:id/history(priceHistory);
//     getPriceHistory: async (productId) => {
//         const response = await API.get(`products/${productId}/history`);
//         return response.data;
//     }


// }


// src/features/products/services/ProductAPI.js
import API from "../../../services/api";

export const productAPI = {
    //  POST: /products/add-product
    addProduct: async (productData) => {
        console.log("Adding product:", productData);
        const response = await API.post("products/add-product", productData);
        console.log("Added product response:", response.data);
        return response.data;
    },

    //  GET: /products/all-products  
    getUserProducts: async () => {
        console.log("Fetching user products...");
        const response = await API.get("/products/all-products");
        console.log("Fetched products response:", response.data);
        return response.data;
    },

    //  GET: /products/product/:id
    getProductById: async (productId) => {
        const response = await API.get(`/products/product/${productId}`);
        return response.data;
    },

    //  DELETE: /products/delete/:id (Backend fix ke baath)
    removeProduct: async (productId) => {
        console.log("Removing product with ID:", productId);
        const response = await API.delete(`/products/delete/${productId}`);
        console.log("Remove product response:", response.data);
        return response.data;
    },

    //  POST: /products/scan/:id (Backend fix ke baath)
    scanProduct: async (productId) => {
        console.log("Scanning product with ID:", productId);
        const response = await API.post(`/products/scan/${productId}`);
        console.log("Scanned product response:", response.data);
        return response.data;
    },

    //  GET: /products/history/:id (Backend fix ke baath)
    getPriceHistory: async (productId) => {
        const response = await API.get(`/products/history/${productId}`);
        return response.data;
    }
}