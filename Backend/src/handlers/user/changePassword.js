import { User } from "../../models/user.modesl.js";
import { response } from "../../utils/response.js";

export const changePassword = async (event) => {
  try {
    const userId = event.requestContext.authorizer.userId;
    const body = JSON.parse(event.body);

    const { oldPassword, newPassword } = body;

    const user = await User.findById(userId);
    const isCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isCorrect) {
      return response(400, { message: "Invalid Password" });
    }

    user.Password = newPassword;
    await user.save({ validateBeforeSave: false });

    return response(200, { message: "Password updated successfully" });

  } catch (err) {
    return response(500, { error: err.message });
  }
};
