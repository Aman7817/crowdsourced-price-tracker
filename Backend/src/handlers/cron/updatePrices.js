import { Product } from "../../models/product.models.js";
import { scrapeProduct } from "../../services/scraper.js";
import { connectDB } from "../../database/db.js";

export const updatePrices = async () => {
  console.log("Running scheduled price update...");

  try {
    // VERY IMPORTANT for Lambda Cron
    await connectDB();

    const products = await Product.find();

    for (let product of products) {
      const scraped = await scrapeProduct(product.url);

      if (scraped.price) {
        product.currentPrice = scraped.price;
        product.name = scraped.name || product.name;
        product.site = scraped.site || product.site;

        product.priceHistory.push({
          price: scraped.price,
          date: new Date()
        });

        await product.save();

        console.log(`Updated price for: ${product.name} → ₹${scraped.price}`);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Price update completed" })
    };

  } catch (err) {
    console.error("CRON Error:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Cron job failed",
        error: err.message
      })
    };
  }
};
