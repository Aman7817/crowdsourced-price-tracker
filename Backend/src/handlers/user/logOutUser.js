import { User } from "../../models/user.models.js";
import { response } from "../../utils/response.js";
import { withDB } from "../../utils/withDb.js";

export const logOutUser = withDB(async (event) => {
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
});
