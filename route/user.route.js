import { Router } from "express";
import {
  forgotPasswordController,
  loginUserController,
  logoutController,
  registerUserController,
  removerImageFromCloudinary,
  resetPassword,
  updateUserDetails,
  userAvatarController,
  verifyEmailController,
  verifyForgotPasswordOtp,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();
userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.get("/logout", auth, logoutController);
userRouter.put("/user-avatar", auth, upload.any(), userAvatarController);
userRouter.delete("/delete-image", auth, removerImageFromCloudinary);
userRouter.put("/:id", auth, updateUserDetails);
userRouter.post("/forgot-password", forgotPasswordController);
userRouter.post("/verify-forgot-password-otp", verifyForgotPasswordOtp);
userRouter.put("/reset-password", resetPassword);

export default userRouter;
