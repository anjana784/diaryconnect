import type { Request, Response } from "express";
import Tag from "./../../models/tag";

// get all tags
export const getAllTags = async (req: Request, res: Response) => {
  try {
    console.log("get all tags");
    const tags = await Tag.find({});
    res.status(200).json({
      staus: "Success get tags",
      data: {
        items: tags.length,
        tags,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// get a tag
export const getTag = async (req: Request, res: Response) => {
  try {
    console.log("get tag");
    const tag = await Tag.findById(req.params.id);
    res.status(200).json({
      staus: "Success get tag",
      data: {
        tag,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// create a tag
export const createTag = async (req: Request, res: Response) => {
  try {
    console.log("create tag");
    res.status(200).json({
      staus: "Success",
    });
    const ress = await Tag.create(req.body);
    console.log(ress);
  } catch (err) {
    console.log(err);
  }
};

// update a tag
export const updateTag = async (req: Request, res: Response) => {
  try {
    console.log("update tag");
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

// delete a tag

export const deleteTag = async (req: Request, res: Response) => {
  try {
    console.log("delete tag");
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
