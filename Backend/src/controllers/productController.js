// controllers/productController.js
import { asyncHandler } from "../utils/asynckHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.models.js";
import { scrapeProduct } from "../services/scraper.js";

const addProduct = asyncHandler(async (req, res) => {
  const { url, targetPrice } = req.body;
  const userId = req.user._id;

  if (!url || !targetPrice) throw new ApiError(400, "URL and targetPrice are required");

  // ✅ Step 1: Check if same user already added this URL
  const existingProduct = await Product.findOne({ url, user: userId });
  if (existingProduct) {
    throw new ApiError(409, "You have already added this product");
  }

  // ✅ Step 2: Scrape product data
  const scraped = await scrapeProduct(url);
  if (!scraped.price) {
    throw new ApiError(400, "Could not fetch product details");
  }

  // ✅ Step 3: Save with user reference
  const newProduct = await Product.create({
    url,
    name: scraped.name,
    site: scraped.site,
    currentPrice: scraped.price,
    priceHistory: [{ price: scraped.price }],
    targetPrice: targetPrice,
    user: userId,
    isActive: true, // ✅ Add isActive field
    lastChecked: new Date() // ✅ Add lastChecked field
  });

  res
    .status(201)
    .json(new ApiResponse(201, newProduct, "New product added successfully"));
});

const getAllProducts = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // ✅ Sirf current user ke products dikhao
  const products = await Product.find({ user: userId });

  res
    .status(200)
    .json(new ApiResponse(200, products, "All products fetched successfully"));
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");

  res
    .status(200)
    .json(new ApiResponse(200, product, "Product fetched successfully"));
});

// ✅ ADD THIS: Scan/Refresh Product (Same as your refreshProduct)
const scanProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  
  if (!product) throw new ApiError(404, "Product not found");

  // Check if user owns this product
  if (product.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Access denied");
  }

  const scraped = await scrapeProduct(product.url);

  if (scraped.price) {
    product.currentPrice = scraped.price;
    product.name = scraped.name || product.name;
    product.site = scraped.site || product.site;
    product.priceHistory.push({ price: scraped.price, date: new Date() });
    product.lastChecked = new Date(); // ✅ Update lastChecked
  }

  await product.save();
  
  res
    .status(200)
    .json(new ApiResponse(200, product, "Product scanned successfully"));
});

// ✅ ADD THIS: Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  
  if (!product) throw new ApiError(404, "Product not found");

  // Check if user owns this product
  if (product.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Access denied");
  }

  await Product.findByIdAndDelete(id);
  
  res
    .status(200)
    .json(new ApiResponse(200, null, "Product deleted successfully"));
});

// ✅ ADD THIS: Get Price History
const getPriceHistory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  
  if (!product) throw new ApiError(404, "Product not found");

  // Check if user owns this product
  if (product.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Access denied");
  }

  res
    .status(200)
    .json(new ApiResponse(200, product.priceHistory, "Price history fetched successfully"));
});

// ✅ Keep your existing refreshProduct (or remove if using scanProduct)
const refreshProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");

  const scraped = await scrapeProduct(product.url);

  if (scraped.price) {
    product.currentPrice = scraped.price;
    product.name = scraped.name || product.name;
    product.site = scraped.site || product.site;
    product.priceHistory.push({ price: scraped.price, date: new Date() });
    product.lastChecked = new Date();
  }

  await product.save();
  res
    .status(200)
    .json(new ApiResponse(200, product, "Product refreshed successfully"));
});

export { 
  addProduct, 
  getAllProducts, 
  getProduct, 
  refreshProduct,
  scanProduct,     
  deleteProduct,     
  getPriceHistory  
};

// import { asyncHandler } from "../utils/asynckHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { Product } from "../models/product.models.js";
// import { scrapeProduct } from "../services/scraper.js";

// const addProduct = asyncHandler(async (req, res) => {
//   const { url,targetPrice } = req.body;
//   const userId = req.user._id;

//   if (!url || !targetPrice) throw new ApiError(400, "URL and targetPrice are required");

//   // ✅ Step 1: Check if same user already added this URL
//   const existingProduct = await Product.findOne({ url, user: userId });
//   if (existingProduct) {
//     throw new ApiError(409, "You have already added this product");
//   }

//   // ✅ Step 2: Scrape product data
//   const scraped = await scrapeProduct(url);
//   if (!scraped.price) {
//     throw new ApiError(400, "Could not fetch product details");
//   }

//   // ✅ Step 3: Save with user reference
//   const newProduct = await Product.create({
//     url,
//     name: scraped.name,
//     site: scraped.site,
//     currentPrice: scraped.price,
//     priceHistory: [{ price: scraped.price }],
//     targetPrice: targetPrice,
//     user: userId, // <-- Important field (must be in Product schema)
//   });

//   res
//     .status(201)
//     .json(new ApiResponse(201, newProduct, "New product added successfully"));
// });

// const getAllProducts = asyncHandler(async (req, res) => {
//   const userId = req.user._id;

//   // ✅ Sirf current user ke products dikhao
//   const products = await Product.find({ user: userId });

//   res
//     .status(200)
//     .json(new ApiResponse(200, products, "All products fetched successfully"));
// });

// const getProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) throw new ApiError(404, "Product not found");

//   res
//     .status(200)
//     .json(new ApiResponse(200, product, "Product fetched successfully"));
// });

// const refreshProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) throw new ApiError(404, "Product not found");

//   const scraped = await scrapeProduct(product.url);

//   if (scraped.price) {
//     product.currentPrice = scraped.price;
//     product.name = scraped.name || product.name;
//     product.site = scraped.site || product.site;
//     product.priceHistory.push({ price: scraped.price });
//   }

//   await product.save();
//   res
//     .status(200)
//     .json(new ApiResponse(200, product, "Product refreshed successfully"));
// });
// export { addProduct, getAllProducts, getProduct, refreshProduct };
