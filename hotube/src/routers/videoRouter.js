import express from "express";

const videoRouter = express.Router();

const handlerWatch = (req, res, next) => {
    return res.send("watch page");
};

videoRouter.get("/watch", handlerWatch);

export default videoRouter;