import { Alert } from "../models/alert.models.js";
import { Product } from "../models/product.models.js";

export async function createAlertService(userId, productId, targetPrice) {

  const product = await Product.findById(productId);
  if (!product) throw { statusCode: 404, message: "Product not found" };

  if (product.user.toString() !== userId.toString()) {
    throw { statusCode: 403, message: "Access denied" };
  }

  const exists = await Alert.findOne({
    userId,
    productId,
    isActive: true,
  });

  if (exists) throw { statusCode: 409, message: "Alert already exists" };

  const alert = await Alert.create({
    userId,
    productId,
    targetPrice,
  });

  await alert.populate("productId", "name currentPrice site url image");

  return alert;
}

export async function getAlertsService(userId) {
  return await Alert.find({ userId })
    .populate("productId", "name currentPrice site url image")
    .sort({ createdAt: -1 });
}
