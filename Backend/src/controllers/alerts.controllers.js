// controllers/alerts.controllers.js
import { Alert } from "../models/alert.models.js";
import { Product } from "../models/product.models.js";
import { asyncHandler } from "../utils/asynckHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create alert
const createAlert = asyncHandler(async (req, res) => {
  const { productId, targetPrice } = req.body;
  const userId = req.user._id; // ✅ Get from authenticated user

  if (!productId || !targetPrice) {
    throw new ApiError(400, "Product ID and target price are required");
  }

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Product not found");

  // Check if user owns the product
  if (product.user.toString() !== userId.toString()) {
    throw new ApiError(403, "Access denied - Product does not belong to you");
  }

  // Check if alert already exists
  const existingAlert = await Alert.findOne({ 
    userId, 
    productId,
    isActive: true 
  });

  if (existingAlert) {
    throw new ApiError(409, "Alert already exists for this product");
  }

  // Create alert
  const alert = await Alert.create({ 
    userId, 
    productId, 
    targetPrice 
  });

  // Populate product details
  await alert.populate('productId', 'name currentPrice site url image');

  res.status(201).json(
    new ApiResponse(201, alert, "Alert created successfully")
  );
});

// Get alerts for current user
const getAlerts = asyncHandler(async (req, res) => {
  const userId = req.user._id; // ✅ Get from authenticated user

  const alerts = await Alert.find({ userId })
    .populate('productId', 'name currentPrice site url image')
    .sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(200, alerts, "Alerts fetched successfully")
  );
});

export { createAlert, getAlerts };