import express from "express";
import {homeVideo} from "../controller/videoController";
import { join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.get("/join", join);

export default globalRouter;
