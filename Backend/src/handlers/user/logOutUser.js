import { User } from "../../models/user.modesl.js";
import { response } from "../../utils/response.js";

export const logOutUser = async (event) => {
  try {
    const userId = event.requestContext.authorizer.userId;

    await User.findByIdAndUpdate(
      userId,
      { $set: { refreshToken: undefined } },
      { new: true }
    );

    return response(200, { message: "Logged out successfully" });
  } catch (err) {
    return response(500, { error: err.message });
  }
};
