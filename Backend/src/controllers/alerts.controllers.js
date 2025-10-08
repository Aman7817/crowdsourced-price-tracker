import { Alert } from "../models/alert.models.js";
import { Product } from "../models/product.models.js";
import { asyncHandler } from "../utils/asynckHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createAlert = asyncHandler(async (req, res) => {
  const { userId, productId, targetPrice } = req.body;

  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Product not found");

  const alert = await Alert.create({ userId, productId, targetPrice });
  res.status(201).json(new ApiResponse(alert, "Alert created successfully"));
});

export { createAlert };
