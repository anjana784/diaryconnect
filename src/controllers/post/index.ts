import type { RequestHandler } from "express";
import Post from "./../../models/post";

// get all posts
export const getAllPosts: RequestHandler = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      staus: "Success get posts",
      data: {
        items: posts.length,
        posts,
        user: req.user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      error: {
        message: err.message,
      },
    });
  }
};

// get a post
export const getPost: RequestHandler = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      staus: "Success get post",
      data: {
        post,
        user: req.user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// create a post
export const createPost: RequestHandler = async (req, res) => {
  try {
    // check if the user is admin
    if (req.user && req.user.role === "admin") {
      // create a new post
      const newPost = await Post.create(req.body);

      res.status(200).json({
        staus: "Success",
        data: {
          post: newPost,
        },
        user: req.user,
      });
    } else {
      res.status(401).json({
        status: "Error",
        error: {
          message: "unauthorized",
        },
      });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: "Error from catch block",
      error: {
        message: err.message,
      },
    });
  }
};

// update a post
export const updatePost: RequestHandler = async (req, res) => {
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
export const deletePost: RequestHandler = async (req, res) => {
  try {
    console.log("DELETE:/post/:id");
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
