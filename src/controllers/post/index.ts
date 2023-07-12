import type { Request, Response } from "express";
import Post from "./../../models/post";

// get all posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    console.log("GET:/post");
    const posts = await Post.find({});
    res.status(200).json({
      staus: "Success get posts",
      data: {
        items: posts.length,
        posts,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// get a post
export const getPost = async (req: Request, res: Response) => {
  try {
    console.log("GET:/post/:id");
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      staus: "Success get post",
      data: {
        post,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// create a post
export const createPost = async (req: Request, res: Response) => {
  try {
    console.log("POST:/post");
    res.status(200).json({
      staus: "Success",
    });
    const ress = await Post.create(req.body);
    console.log(ress);
  } catch (err) {
    console.log(err);
  }
};

// update a post
export const updatePost = async (req: Request, res: Response) => {
  try {
    console.log("PATCH:/post/:id");
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

// delete a post
export const deletePost = async (req: Request, res: Response) => {
  try {
    console.log("DELETE:/post/:id");
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
