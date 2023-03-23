import express from "express";
import { edit, userDelete } from "../controller/userController"

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", userDelete);

export default userRouter;