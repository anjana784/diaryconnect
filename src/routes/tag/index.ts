import { Router } from "express";
import {
  getAllTags,
  createTag,
  deleteTag,
  getTag,
  updateTag,
} from "./../../controllers/tag";
import authMiddleware from "./../../middlewares/authMiddleware";

// create tag router
const tagRouter = Router();

// handle /tag router
tagRouter.route("/").get(getAllTags).post(authMiddleware, createTag);

// handle /tag/:id router
tagRouter
  .route("/:id")
  .get(getTag)
  .patch(authMiddleware, updateTag)
  .delete(authMiddleware, deleteTag);

export default tagRouter;
