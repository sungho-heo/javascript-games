import express from "express";
import { getEdit,seeVideo,postEdit,getUpload,postUpload,deleteVideo } from "../controller/videoController";
import { userProtectMiddleware } from "../middlewares";

const videoRouter = express.Router();


videoRouter.get("/:id([0-9a-f]{24})", seeVideo)
videoRouter.route("/:id([0-9a-f]{24})/edit").all(userProtectMiddleware).get(getEdit).post(postEdit)
videoRouter.get("/:id([0-9a-f]{24})/delete",userProtectMiddleware, deleteVideo);
videoRouter.route("/upload").all(userProtectMiddleware).get(getUpload).post(postUpload);

export default videoRouter;