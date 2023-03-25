import express from "express";
import { getEdit,seeVideo,postEdit,getUpload,postUpload } from "../controller/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;