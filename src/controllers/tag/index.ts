import type { RequestHandler } from "express";
import Tag from "./../../models/tag";

// get all tags
export const getAllTags: RequestHandler = async (req, res) => {
  try {
    console.log("GET:/tag");
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
export const getTag: RequestHandler = async (req, res) => {
  try {
    console.log("GET:/tag/:id");
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
export const createTag: RequestHandler = async (req, res) => {
  try {
    console.log("POST:/tag");
    const result = await Tag.create(req.body);
    res.status(200).json({
      staus: "Success",
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// update a tag
export const updateTag: RequestHandler = async (req, res) => {
  try {
    console.log("PATCH:/tag/:id");
    const result = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};

// delete a tag

export const deleteTag: RequestHandler = async (req, res) => {
  try {
    console.log("DELETE:/tag/:id");
    await Tag.findByIdAndDelete(req.params.id);
    res.status(200).json({
      staus: "Success",
    });
  } catch (err) {
    console.log(err);
  }
};
