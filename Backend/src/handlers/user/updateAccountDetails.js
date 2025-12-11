import { User } from "../../models/user.models.js";
import { response } from "../../utils/response.js";
import { withDB } from "../../utils/withDb.js";

export const updateAccountDetails = withDB(async (event) => {
  try {
    const userId = event.requestContext.authorizer.userId;
    const body = JSON.parse(event.body);

    const { firstName, lastName, email } = body;

    if (!firstName || !lastName || !email) {
      return response(400, { message: "All fields required" });
    }

    const updated = await User.findByIdAndUpdate(
      userId,
      {
        $set: { firstName, lastName, email }
      },
      { new: true }
    );

    return response(200, {
      success: true,
      message: "Account updated successfully",
      user: updated
    });

  } catch (err) {
    return response(500, { error: err.message });
  }
});
