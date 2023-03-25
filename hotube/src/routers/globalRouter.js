import express from "express";
import {homeVideo} from "../controller/videoController";
import { join,login } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.get("/join", join);
globalRouter.get("/login", login);


export default globalRouter;
