// src/handlers/product/getProduct.js
import { getProductService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../db.js";

export const getProduct = async (event) => {
  try {
    await connectDB();

    const { id } = event.pathParameters;

    const product = await getProductService(id);

    return success(200, product);
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
