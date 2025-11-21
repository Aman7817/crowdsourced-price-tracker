// src/handlers/product/getPriceHistory.js
import { getPriceHistoryService } from "../../services/productService.js";
import { success, failure } from "../../utils/response.js";
import { connectDB } from "../../db.js";

export const getPriceHistory = async (event) => {
  try {
    await connectDB();

    const { id } = event.pathParameters;
    const userId = event.requestContext.authorizer.userId;

    const history = await getPriceHistoryService({ id, userId });

    return success(200, history);
  } catch (err) {
    return failure(err.statusCode || 500, err.message);
  }
};
