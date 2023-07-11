import type { Request, Response } from "express";

// get all posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    // console.log(req);
    res.status(200).json({
      staus: "Success get posts",
    });
  } catch (err) {
    console.log(err);
  }
};

// get a post
export const getPost = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.status(200).json({
      staus: "Success get post",
    });
  } catch (err) {
    console.log(err);
  }
};

// create a post
export const createPost = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

// update a post
export const updatePost = async (req: Request, res: Response) => {
  try {
    console.log(req);
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
    console.log(req);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
