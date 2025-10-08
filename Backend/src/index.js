// import dotenv from "dotenv";

// import connectDB from "./database/db.js";
// import { app } from "./app.js";

// dotenv.config({
//     path: "./.env"
// })

// connectDB()
//     .then(() => {
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at Port: ${process.env.PORT}`);
//         })
//     })
//     .catch((err) => {
//         console.log("MONGO DB connection failed!!!", err);
//     })

import dotenv from "dotenv";
dotenv.config(); // ✅ this line fixed

import connectDB from "./database/db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MONGO DB connection failed!!!", err);
  });
