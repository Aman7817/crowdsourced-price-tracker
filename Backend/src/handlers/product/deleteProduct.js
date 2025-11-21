// src/handlers/product/deleteProduct.js
import { deleteProductService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../db.js";

export const deleteProduct = async (event) => {
  try {
    await connectDB();

    const { id } = event.pathParameters;
    const userId = event.requestContext.authorizer.userId;

    await deleteProductService({ id, userId });

    return success(200, { message: "Product deleted successfully" });
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
