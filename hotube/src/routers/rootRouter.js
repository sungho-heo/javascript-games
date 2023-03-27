import express from "express";
import {homeVideo,search} from "../controller/videoController";
import { getJoin,postJoin,login } from "../controller/userController";

const rootRouter = express.Router();

rootRouter.get("/", homeVideo);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);


export default rootRouter;
