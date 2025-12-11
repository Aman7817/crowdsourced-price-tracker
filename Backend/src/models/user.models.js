import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
      index: true
    },
    LastName: {
      type: String,
      required: true,
      index: true
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) return next();
  this.Password = await bcrypt.hash(this.Password, 10);
});

// Compare passwords
userSchema.methods.isPasswordCorrect = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

// Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      Email: this.Email,
      FirstName: this.FirstName,
      LastName: this.LastName,
    },
    process.env.JWT_SECRET,   // 🔥 Only one secret
    {
      expiresIn: "15m",       // Access token expiry
    }
  );
};

// Refresh Token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET,   // 🔥 Same secret used here
    {
      expiresIn: "7d",         // Refresh token expiry
    }
  );
};

export const User = mongoose.model("User", userSchema);
