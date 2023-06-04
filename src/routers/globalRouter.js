import express from "express"
import {home, search} from "../controllers/videosController"
import {join} from "../controllers/usersController"

const globalRouter = express.Router();
globalRouter.get("/",home);
globalRouter.get("/join",join);
globalRouter.get("/search", search);

export default globalRouter;