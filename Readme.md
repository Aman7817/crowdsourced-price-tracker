# 💸 Crowdsourced Price Tracker

Welcome to the **Crowdsourced Price Tracker**, an intelligent web app that lets users track product prices across e-commerce sites and receive alerts when prices drop.

---

## 🚀 Overview

This project helps users monitor product prices, set custom target alerts, and get automatic notifications when prices fall.  
Built with a secure Node.js + Express backend and a modern React frontend.

---

## ⚙️ Features

### 🧠 Smart Price Tracking
- Scrapes real-time product details and pricing.
- Automatically updates prices in the background.
- Stores user-defined **target prices** for alerts.

### 🔔 Price Drop Alerts
- Sends **email notifications** when product price ≤ target price.
- Background job checks and updates product prices regularly.

### 👤 User Management
- Register / Login using **JWT-based authentication**.
- Secure user sessions stored via cookies.
- Update profile and change password options.

### 📊 Dashboard & Product Management
- Add and manage multiple products.
- View tracked items with current price and alert status.
- Clean and responsive dashboard interface.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JWT + Cookies |
| **Email Alerts** | Nodemailer |
| **Web Scraping** | Cheerio / Puppeteer |
| **Hosting** | AWS |

---

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or later)
- MongoDB (local or Atlas)
- A valid **email SMTP account** (e.g., Gmail, Mailtrap)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/crowdsourced-price-tracker.git
cd crowdsourced-price-tracker
2️⃣ Install Dependencies
Backend
bash
Copy code
npm install
Frontend
bash
Copy code
cd frontend
npm install
3️⃣ Create a .env File in the Root Directory
env
Copy code
# MongoDB
MONGO_URI=your_mongodb_uri

# JWT
JWT_SECRET=your_jwt_secret

# Server
PORT=8000
CORS_ORIGIN=http://localhost:5173

# Email (Nodemailer)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
4️⃣ Run the App
Backend:
bash
Copy code
npm run dev
Frontend:
bash
Copy code
npm run dev
🌐 API Endpoints
👤 Authentication
Method	Endpoint	Description
POST	/api/v1/users/register	Register new user
POST	/api/v1/users/login	Login user
POST	/api/v1/users/loggedOut	Logout user
GET	/api/v1/users/me	Get current logged-in user

🛒 Products
Method	Endpoint	Description
POST	/api/v1/products/add	Add a new product
GET	/api/v1/products	Get all products
PUT	/api/v1/products/:id	Update product
DELETE	/api/v1/products/:id	Delete product

🔔 Alerts
Method	Endpoint	Description
GET	/api/v1/alerts	Get user alerts
POST	/api/v1/alerts/check	Trigger price check manually

📩 Email Notification Flow
User adds a product with a target price.

The system scrapes and stores the current price.

A background job periodically checks updated prices.

If currentPrice ≤ targetPrice, an email alert is sent via Nodemailer.

📸 Screenshots (Optional)
Add these later once UI is finalized.

🧪 Testing
To test API endpoints manually:

bash
Copy code
# Example: Add Product
curl -X POST http://localhost:8000/api/v1/products/add \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_TOKEN" \
-d '{"url":"https://example.com/product","targetPrice":500}'
🧰 Common Issues
❌ MongoDB Connection Error
Check if MONGO_URI is correct.

Ensure MongoDB service is running.

❌ Email Not Sending
Verify your SMTP credentials.

If using Gmail, enable App Passwords.

❌ CORS Error
Make sure CORS_ORIGIN in .env matches your frontend URL.


🤝 Contributing
Currently, contributions are not open as this is part of a personal learning + project build series.

🙏 Acknowledgments
Nodemailer for email notifications

MongoDB for data storage

Pupeteer for scraping product info



📄 License
MIT License © 2025 Aman Gurjar