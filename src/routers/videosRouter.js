import express from "express"
import { remove, getEdit, postEdit, watch, getUpload, postUpload } from "../controllers/videosController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)",watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)/delete",remove);

export default videoRouter;