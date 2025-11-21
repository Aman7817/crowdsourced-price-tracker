import { User } from "../../models/user.modesl.js";
import { response } from "../../utils/response.js";

export const getMe = async (event) => {
  try {
    const userId = event.requestContext.authorizer.userId;

    const user = await User.findById(userId).select("-Password -refreshToken");

    return response(200, { user });

  } catch (err) {
    return response(500, { error: err.message });
  }
};
