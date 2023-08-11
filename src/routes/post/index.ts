import { Router } from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../../controllers/post";
import { postComment } from "./../../controllers/comment";
import authMiddleware from "./../../middlewares/authMiddleware";

// create post router
const postRouter = Router();

// handle /post router
postRouter.route("/").get(getAllPosts).post(authMiddleware, createPost);

// handle /post/:id router
postRouter
  .route("/:id")
  .get(getPost)
  .patch(authMiddleware, updatePost)
  .delete(authMiddleware, deletePost);

// handle /post/:id/comment router
postRouter.route("/:id/comment").post(authMiddleware, postComment);

export default postRouter;
