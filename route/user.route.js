import { Router } from "express";
import {
  loginUserController,
  logoutController,
  registerUserController,
  userAvatarController,
  verifyEmailController,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();
userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.get("/logout", auth, logoutController);
userRouter.put(
  "/user-avatar",
  auth,
  upload.any(), // ← Aceita qualquer formato (single ou array)
  userAvatarController
);

export default userRouter;
