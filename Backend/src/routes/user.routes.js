import { Router } from "express";
import { registerUser, loginUser, updateAccountDetails, changePassword, logOutUser, getMe } from "../controllers/user.controllers.js";
import verifyjwt from "../middlewares/auth.middlewares.js"; // import middleware

const router = Router();

// Public routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Protected routes
router.route("/loggedOut").post(verifyjwt, logOutUser);
router.route("/me").get(verifyjwt, getMe);
router.route("/update-account").put(verifyjwt, updateAccountDetails);
router.route("/change-password").put(verifyjwt, changePassword);

export default router;
