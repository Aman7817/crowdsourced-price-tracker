import cron from 'node-cron'
import Product from '../models/product.models.js'
import { scrapeProduct } from '../services/scraper.js'

// Schedule the task to run every day at midnight

cron.schedule("0 10 * * *" , async () => {
    console.log("Running price update task...");

    try {
        const products = await Product.find();
        for (let product of products) {
            const scraped = await scrapeProduct(product.url);

            if(scrapeProduct.price) {
                product.currentPrice = scrapeProduct.price;
                product.name = scrapeProduct.name || product.name;
                product.site = scrapeProduct.site || product.site;

                product.priceHistory.push({
                    Date: new Date(),
                    price: scrapeProduct.price
                });

                await product.save();
                console.log(`Updated price for ${product.name}: ${scrapeProduct.price}`);

            }
        }
    } catch (error) {
        console.error("Error updating prices:", error);

        
    }
})