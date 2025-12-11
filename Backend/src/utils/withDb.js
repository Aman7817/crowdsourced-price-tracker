import { connectDB } from "../database/db.js";

export const withDB = (handler) => {
  return async (event, context) => {
    await connectDB();              // STEP 1 → Connect DB
    return handler(event, context); // STEP 2 → Run actual handler
  };
};
