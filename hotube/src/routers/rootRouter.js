import express from "express";
import {homeVideo,search} from "../controller/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
} from "../controller/userController";

const rootRouter = express.Router();

rootRouter.get("/", homeVideo);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", search);


export default rootRouter;
