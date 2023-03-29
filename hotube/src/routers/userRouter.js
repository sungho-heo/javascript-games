import express from "express";
import {
  edit,
  logout,
  githubLogin,
  githubCallback,
} from "../controller/userController"

const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callback", githubCallback);
userRouter.get("/edit", edit);



export default userRouter;