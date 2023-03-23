import express from "express";
import { edit,seeVideo,deleteVideo,upload } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id", seeVideo);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;