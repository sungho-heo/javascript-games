import express from "express";
import {
  edit,
  userDelete,
  seeUser,
  logout,
  githubLogin,
  githubCallback,
} from "../controller/userController"

const userRouter = express.Router();

userRouter.get("/:id", seeUser);
userRouter.get("/logout", logout);
userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callbck", githubCallback);
userRouter.get("/edit", edit);
userRouter.get("/delete", userDelete);


export default userRouter;