import express from "express"
import {home, search} from "../controllers/videosController"
import {getJoin, postJoin, login} from "../controllers/usersController"

const rootRouter = express.Router();
rootRouter.get("/",home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;