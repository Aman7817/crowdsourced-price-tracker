import puppeteer from "puppeteer";

/**
 * Scrapes product name and price from a given URL
 * Supports Amazon & Flipkart (can add more sites later)
 */
async function scrapeProduct(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  let data = { name: null, price: null, site: null };

  if (url.includes("amazon")) {
    data = await page.evaluate(() => {
      const name = document.querySelector("#productTitle")?.innerText.trim();
      const priceText = document.querySelector(".a-price-whole")?.innerText.trim();
      const price = priceText ? parseInt(priceText.replace(/[,₹]/g, "")) : null;
      return { name, price, site: "Amazon" };
    });
  } else if (url.includes("flipkart")) {
    data = await page.evaluate(() => {
      const name = document.querySelector(".B_NuCI")?.innerText.trim();
      const priceText = document.querySelector("._30jeq3")?.innerText.trim();
      const price = priceText ? parseInt(priceText.replace(/[,₹]/g, "").replace("₹","")) : null;
      return { name, price, site: "Flipkart" };
    });
  }

  await browser.close();
  return data;
}

export {
    scrapeProduct
}
