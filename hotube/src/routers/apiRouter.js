import express from "express";
import { pageViewCount } from "../controller/videoController";

const apiRouter = express.Router();


apiRouter.post("/videos/:id([0-9a-f]{24})/view", pageViewCount)


export default apiRouter