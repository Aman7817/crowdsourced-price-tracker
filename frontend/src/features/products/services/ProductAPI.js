import API from "../../../services/api";

export const productAPI = {
    // post /api/v1/products/add
    addPoduct: async (productData) => {
        const response = await API.post("products/add", productData);
        return response.data;
    },
    // get /api/v1/products
    getProducts: async () => {
        const response = await API.get("/products");
        return response.data;
    },
    // get /api/v1/products/:id
    getProductById: async (productId) => {
        const response = await API.get(`/products/${productId}`);
        return response.data;
    },
    // delete /api/v1/products/:id
    deleteProduct: async (productId) => {
        const response = await API.delete(`/products/${productId}`);
        return response.data;
    },
    // post /api/v1/products/scan
    scanProduct: async (productId) => {
        const response = await API.post(`/products/${productId}/scan`);
        return response.data;
    },
    // get /api/v1/products/:id/history(priceHistory);
    getPriceHistory: async (productId) => {
        const response = await API.get(`products/${productId}/history`);
        return response.data;
    }


}