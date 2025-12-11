import { User } from "../../models/user.models.js";
import { response } from "../../utils/response.js";

import { connectDB } from "../../database/db.js";

export const registerUser = async (event) => {
  try {
    console.log("Register User Event:", event);
    await connectDB();
    console.log("Database connected successfully");
    const body = JSON.parse(event.body);
    const { FirstName, LastName, Email, Password } = body;

    if ([FirstName, LastName, Email, Password].some(f => !f?.trim())) {
      return response(400, { message: "All fields are required" });
    }

    const existing = await User.findOne({ Email });
    if (existing) {
      return response(409, { message: "User already exists" });
    }

    const newUser = await User.create({
      FirstName,
      LastName,
      Email,
      Password,
    });

    const createdUser = await User.findById(newUser._id).select("-Password -refreshToken");

    return response(201, {
      success: true,
      message: "User registered successfully",
      user: createdUser
    });

  } catch (err) {
    return response(500, { error: "Something went wrong", details: err.message });
  }
};
