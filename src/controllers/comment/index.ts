import type { Request, Response } from "express";
import Comment from "./../../models/comment";
import Post from "./../../models/post";
import User from "./../../models/user";

// post a comment
export const postComment = async (req: Request, res: Response) => {
  try {
    console.log("POST:/post/:id/comment");
    // get username and comment from req.body
    const { username, comment } = req.body;
    console.log(username, comment);

    // get user by username
    const user = await User.findOne({ username });
    console.log(user);

    // get post by id
    const post = await Post.findById(req.params.id);
    console.log(post);

    // create comment
    const newComment = await Comment.create({
      user: user,
      ...comment,
    });
    console.log(newComment);

    // push comment to post
    post.comments.push(newComment);
    await post.save();

    // post.comments.push(req.body);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

// update a comment
export const updateComment = async (req: Request, res: Response) => {
  try {
    console.log("PUT:/post/:id/comment/:commentId");

    // get comment by id
    const comment = await Comment.findById(req.params.commentId);

    // update comment
    await Comment.findByIdAndUpdate(req.params.commentId, req.body);

    res.status(200).json({
      staus: "Success",
    });

    console.log(comment);
  } catch (err) {
    console.log(err);
  }
};

// delete a comment
export const deleteComment = async (req: Request, res: Response) => {
  try {
    console.log("DELETE:/post/:id/comment/:commentId");

    // get comment by id
    const comment = await Comment.findById(req.params.commentId);
    console.log(comment);

    // delete comment
    await Comment.findByIdAndDelete(req.params.commentId);

    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
