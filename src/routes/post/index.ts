import { Router } from "express";
import { createPost, getPosts } from "../../controllers/post";

const postRouter = Router();

postRouter.route("/post").get(getPosts).post(createPost);

export default postRouter;
