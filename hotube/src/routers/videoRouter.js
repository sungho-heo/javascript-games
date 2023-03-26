import express from "express";
import { getEdit,seeVideo,postEdit,getUpload,postUpload,deleteVideo } from "../controller/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id([0-9a-f]{24})", seeVideo)
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit)
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;