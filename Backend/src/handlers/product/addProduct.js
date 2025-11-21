import { addProductService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../db.js";

export const addProduct = async (event) => {
  try {
    await connectDB();

    const body = JSON.parse(event.body);
    const userId = event.requestContext.authorizer.userId;

    const product = await addProductService({
      ...body,
      userId,
    });

    return success(201, product);
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
