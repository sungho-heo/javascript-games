import express from "express";

const userRouter = express.Router();

const handlerUserEdit = (req, res, next) => {
    return res.send("user-edit page");
};

userRouter.get("/edit", handlerUserEdit);

export default userRouter;