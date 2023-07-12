import { Router } from "express";
import {
  getAllTags,
  createTag,
  deleteTag,
  getTag,
  updateTag,
} from "./../../controllers/tag";

// create tag router
const tagRouter = Router();

// handle /tag router
tagRouter.route("/").get(getAllTags).post(createTag);

// handle /tag/:id router
tagRouter.route("/:id").get(getTag).patch(updateTag).delete(deleteTag);

export default tagRouter;
