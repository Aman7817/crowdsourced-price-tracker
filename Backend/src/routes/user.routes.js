import { Router } from "express";
import { registerUser,loginUser, updateAccountDetails, changePassword,logOutUser } from "../controllers/user.controllers.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
// secure route
router.route("/loggedOut").post(logOutUser)
// update routes
router.route("/upadate-account").put(updateAccountDetails)
// change Password
router.route("/change-password").put(changePassword)

// Export the router so it can be used in other parts of the application (e.g., app.js or server.js)
export default router;
