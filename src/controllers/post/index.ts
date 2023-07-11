import type { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    console.log(req);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    console.log(req);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    console.log(req);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

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
