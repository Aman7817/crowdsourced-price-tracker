import { Product } from "../models/product.models.js";
import { scrapeProduct } from "../services/scraper.js";
import { ApiError } from "../utils/ApiError.js";

export const addProductService = async (data) => {
  const { url, targetPrice, userId } = data;

  if (!url || !targetPrice) throw new ApiError(400, "URL and targetPrice are required");

  const existingProduct = await Product.findOne({ url, user: userId });
  if (existingProduct) throw new ApiError(409, "You have already added this product");

  const scraped = await scrapeProduct(url);
  if (!scraped.price) throw new ApiError(400, "Could not fetch product details");

  const newProduct = await Product.create({
    url,
    name: scraped.name,
    site: scraped.site,
    currentPrice: scraped.price,
    priceHistory: [{ price: scraped.price }],
    targetPrice,
    user: userId,
    isActive: true,
    lastChecked: new Date()
  });

  return newProduct;
};

export const getAllProductsService = async (userId) => {
  return await Product.find({ user: userId });
};

export const getProductService = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");
  return product;
};

export const scanProductService = async ({ id, userId }) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  if (product.user.toString() !== userId.toString()) {
    throw new ApiError(403, "Access denied");
  }

  const scraped = await scrapeProduct(product.url);

  if (scraped.price) {
    product.currentPrice = scraped.price;
    product.name = scraped.name || product.name;
    product.site = scraped.site || product.site;
    product.priceHistory.push({ price: scraped.price, date: new Date() });
    product.lastChecked = new Date();
  }

  await product.save();
  return product;
};

export const deleteProductService = async ({ id, userId }) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  if (product.user.toString() !== userId.toString()) {
    throw new ApiError(403, "Access denied");
  }

  await Product.findByIdAndDelete(id);
  return true;
};

export const getPriceHistoryService = async ({ id, userId }) => {
  const product = await Product.findById(id);
  if (!product) throw new ApiError(404, "Product not found");

  if (product.user.toString() !== userId.toString()) {
    throw new ApiError(403, "Access denied");
  }

  return product.priceHistory;
};
