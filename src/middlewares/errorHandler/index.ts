import { Request, Response } from "express";
import { appErrorType } from "./../../utils/types";

const errorHandler = (err: appErrorType, req: Request, res: Response) => {
  res.status(err.statusCode).json({
    status: "Error",
    result: {
      type: err.type,
      message: err.message,
    },
  });
};

export default errorHandler;
