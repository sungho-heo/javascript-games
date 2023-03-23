import express from "express";

const globalRouter = express.Router();

const handlerHome = (req, res, next) => {
    return res.send("Home");
};

globalRouter.get("/", handlerHome);

export default globalRouter;
