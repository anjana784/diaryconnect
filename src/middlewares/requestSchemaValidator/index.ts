import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import errorHandler from "./../../middlewares/errorHandler";

const requestSchemaValidator: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorHandler(
      {
        statusCode: 400,
        type: "Bad Request",
        message: errors.array()[0].msg,
      },
      req,
      res
    );
  } else {
    next();
  }
};

export default requestSchemaValidator;
