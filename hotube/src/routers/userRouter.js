import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  githubLogin,
  githubCallback,
} from "../controller/userController"

const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callback", githubCallback);
userRouter.route("/edit").get(getEdit).post(postEdit);



export default userRouter;