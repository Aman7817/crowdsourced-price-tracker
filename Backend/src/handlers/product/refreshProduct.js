// refreshProduct.handler.js

import { updateProductPrice } from "../../services/scraperService.js";
import { saveAlert } from "../../services/alertService.js";
// Refresh product details + update price + save alerts
module.exports.handler = async (event) => {
  try {
    const { productUrl } = JSON.parse(event.body);

    if (!productUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "productUrl is required" }),
      };
    }

    // Step 1: Call scraper service
    const scrapedData = await updateProductPrice(productUrl);

    // Step 2: If price changed → create alert
    if (scrapedData?.priceChanged) {
      await saveAlert({
        productUrl,
        oldPrice: scrapedData.oldPrice,
        newPrice: scrapedData.newPrice,
        timestamp: new Date(),
        message: "Price changed during refresh check",
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Product refreshed successfully",
        data: scrapedData,
      }),
    };

  } catch (error) {
    console.error("REFRESH ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to refresh product", error }),
    };
  }
};
