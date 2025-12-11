// src/handlers/product/getAllProducts.js
import { getAllProductsService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../database/db.js";

export const getAllProducts = async (event) => {
  try {
    await connectDB();

    const userId = event.requestContext.authorizer.userId;

    const products = await getAllProductsService(userId);

    return success(200, products);
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
