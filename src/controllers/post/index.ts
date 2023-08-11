import type { RequestHandler } from "express";
import Post from "./../../models/post";
import errorHandler from "./../../middlewares/errorHandler";
import { disconnect } from "./../../utils/database";

// get all posts
export const getAllPosts: RequestHandler = async (req, res) => {
  try {
    // get all posts
    const posts = await Post.find({});

    // disconnect from the database
    await disconnect();

    // send response
    res.status(200).json({
      staus: "Success get posts",
      data: {
        items: posts.length,
        posts,
        user: req.user,
      },
    });
  } catch (err) {
    // send error response
    errorHandler(
      {
        statusCode: 500,
        type: "Internal Server Error",
        message: err.message,
      },
      req,
      res
    );
  }
};

// get a post
export const getPost: RequestHandler = async (req, res) => {
  try {
    // get a post
    const post = await Post.findById(req.params.id);

    // disconnect from the database
    await disconnect();

    // send response
    res.status(200).json({
      staus: "Success get post",
      data: {
        post,
        user: req.user,
      },
    });
  } catch (err) {
    // send error response
    errorHandler(
      {
        statusCode: 500,
        type: "Internal Server Error",
        message: err.message,
      },
      req,
      res
    );
  }
};

// create a post
export const createPost: RequestHandler = async (req, res) => {
  try {
    // check if the user is admin
    if (req.user && req.user.role === "admin") {
      // create a new post
      const newPost = await Post.create(req.body);

      // disconnect from the database
      await disconnect();

      res.status(200).json({
        staus: "Success",
        data: {
          post: newPost,
        },
        user: req.user,
      });
    } else {
      errorHandler(
        {
          statusCode: 401,
          type: "Unauthorized",
          message: "You are not authorized to execute this operation",
        },
        req,
        res
      );
    }
  } catch (err) {
    // send error response
    errorHandler(
      {
        statusCode: 500,
        type: "Internal Server Error",
        message: err.message,
      },
      req,
      res
    );
  }
};

// update a post
export const updatePost: RequestHandler = async (req, res) => {
  try {
    // check if the user is admin
    if (req.user && req.user.role === "admin") {
      // update a post
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      // disconnect from the database
      await disconnect();

      res.status(200).json({
        staus: "Success",
        data: {
          post: updatedPost,
        },
        user: req.user,
      });
    } else {
      errorHandler(
        {
          statusCode: 401,
          type: "Unauthorized",
          message: "You are not authorized to execute this operation",
        },
        req,
        res
      );
    }
  } catch (err) {
    // send error response
    errorHandler(
      {
        statusCode: 500,
        type: "Internal Server Error",
        message: err.message,
      },
      req,
      res
    );
  }
};

// delete a post
export const deletePost: RequestHandler = async (req, res) => {
  try {
    // check if the user is admin
    if (req.user && req.user.role === "admin") {
      // delete a post
      const deletedPost = await Post.findByIdAndDelete(req.params.id);

      // disconnect from the database
      await disconnect();

      // send response
      res.status(200).json({
        staus: "Success",
        data: {
          post: deletedPost,
        },
        user: req.user,
      });
    } else {
      errorHandler(
        {
          statusCode: 401,
          type: "Unauthorized",
          message: "You are not authorized to execute this operation",
        },
        req,
        res
      );
    }
  } catch (err) {
    // send error response
    errorHandler(
      {
        statusCode: 500,
        type: "Internal Server Error",
        message: err.message,
      },
      req,
      res
    );
  }
};
