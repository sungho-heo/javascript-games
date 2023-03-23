import express from "express";
import { edit, userDelete, seeUser, logout } from "../controller/userController"

const userRouter = express.Router();

userRouter.get("/:id", seeUser);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", userDelete);


export default userRouter;