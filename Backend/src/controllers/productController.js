import { asyncHandler } from "../utils/asynckHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.models.js";
import { scrapeProduct } from "../services/scraper.js";

const addProduct = asyncHandler(async (req, res) => {
  const { url } = req.body; // fix: get url from body
  if (!url) throw new ApiError(400, "URL is required");

  const scraped = await scrapeProduct(url); // fix: use scrapeProduct

  if (!scraped.price) throw new ApiError(400, "Could not fetch product details");

  const newProduct = new Product({
    url,
    name: scraped.name,
    site: scraped.site,
    currentPrice: scraped.price,
    priceHistory: [{ price: scraped.price }]
  });

  await newProduct.save();
    res.status(201).json(
        new ApiResponse(201, newProduct, "New product added successfully")
    );

});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(201).json(new ApiResponse(201,products, "All products fetched successfully"));
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  res.status(200).json(new ApiResponse(product, "Product fetched successfully"));
});

const refreshProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");

  const scraped = await scrapeProduct(product.url);

  if (scraped.price) {
    product.currentPrice = scraped.price;
    product.name = scraped.name || product.name;
    product.site = scraped.site || product.site;
    product.priceHistory.push({ price: scraped.price });
  }

  await product.save();
  res.status(200).json(new ApiResponse(product, "Product refreshed successfully"));
});

export { addProduct, getAllProducts, getProduct, refreshProduct };
