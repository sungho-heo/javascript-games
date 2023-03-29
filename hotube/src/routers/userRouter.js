import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  githubLogin,
  githubCallback,
} from "../controller/userController"
import { userProtectMiddleware,publicMiddleware } from "../middlewares";

const userRouter = express.Router();


userRouter.get("/logout", userProtectMiddleware,logout);
userRouter.get("/github/login", publicMiddleware,githubLogin);
userRouter.get("/github/callback",publicMiddleware, githubCallback);
userRouter.route("/edit").all(userProtectMiddleware).get(getEdit).post(postEdit);



export default userRouter;