import express from "express";
import { pageViewCount, createComment } from "../controller/videoController";

const apiRouter = express.Router();


apiRouter.post("/videos/:id([0-9a-f]{24})/view", pageViewCount);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);


export default apiRouter