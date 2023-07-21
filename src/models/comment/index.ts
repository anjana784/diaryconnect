import { Schema, model } from "mongoose";
import { userSchema } from "./../../models/user";
import { commentType } from "utils/types";

export const commentSchema = new Schema<commentType>({
  user: userSchema,
  content: String,
});

const Comment = model<commentType>("Comment", commentSchema);

export default Comment;
