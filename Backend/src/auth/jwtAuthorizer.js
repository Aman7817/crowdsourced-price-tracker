import jwt from "jsonwebtoken";

export const jwtAuthorizer = async (event, context, callback) => {
  const token = event.authorizationToken?.replace("Bearer ", "");

  if (!token) {
    return callback("Unauthorized");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    callback(null, {
      principalId: decoded._id,
      context: {
        userId: decoded._id
      }
    });

  } catch (err) {
    callback("Unauthorized");
  }
};
