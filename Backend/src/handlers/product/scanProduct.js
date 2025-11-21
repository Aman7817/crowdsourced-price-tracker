// src/handlers/product/scanProduct.js
import { scanProductService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../db.js";

export const scanProduct = async (event) => {
  try {
    await connectDB();

    const { id } = event.pathParameters;
    const userId = event.requestContext.authorizer.userId;

    const product = await scanProductService({ id, userId });

    return success(200, product);
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
