import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../../controllers/post";

// create post router
const postRouter = Router();

// handle /post router
postRouter.route("/").get(getAllPosts).post(createPost);

// handle /post/:id router
postRouter.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

export default postRouter;
