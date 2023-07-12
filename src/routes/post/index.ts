import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../../controllers/post";
import { postComment } from "./../../controllers/comment";

// create post router
const postRouter = Router();

// handle /post router
postRouter.route("/").get(getAllPosts).post(createPost);

// handle /post/:id router
postRouter.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

// handle /post/:id/comment router
postRouter.route("/:id/comment").post(postComment);

export default postRouter;
