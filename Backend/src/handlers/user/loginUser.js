import { response } from "../../utils/response.js";
import { User } from "../../models/user.modesl.js";

const generateTokens = async (userId) => {
  const user = await User.findById(userId);
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

export const loginUser = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { Email, Password } = body;

    if (!Email) return response(400, { message: "Email is required" });

    const user = await User.findOne({ Email });
    if (!user) return response(404, { message: "User does not exist" });

    const pass = await user.isPasswordCorrect(Password);
    if (!pass) return response(401, { message: "Invalid credentials" });

    const { accessToken, refreshToken } = await generateTokens(user._id);

    const userData = await User.findById(user._id).select("-Password -refreshToken");

    return response(200, {
      success: true,
      message: "Logged in successfully",
      token: accessToken,
      refreshToken,
      user: userData,
    });

  } catch (err) {
    return response(500, { error: err.message });
  }
};
