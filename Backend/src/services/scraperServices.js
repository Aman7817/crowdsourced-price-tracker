import chromium from "chrome-aws-lambda";

export async function scrapeProduct(url) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true
  });

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
  }

  await browser.close();
  return data;
}
