import type { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";
import errorHandler from "./../../middlewares/errorHandler";

const authMiddleware: RequestHandler = (req, res, next) => {
  try {
    // get token from the request headers
    const { authorization } = req.headers;

    // check if the token exists
    const token = authorization && authorization?.split(" ")[1];

    if (token) {
      // verify the token
      const { id, username, email, role } = jwt.verify(
        token,
        process.env.JWT_SECRET
      ) as {
        id: string;
        username: string;
        email: string;
        role: "user" | "admin";
      };

      // set the user data to the request
      req.user = {
        id: id,
        username: username,
        email: email,
        role: role,
      };
    } else {
      req.user = null;
    }

    next();
  } catch (error) {
    // console.log(error);

    switch (error) {
      case error instanceof jwt.JsonWebTokenError:
        errorHandler(
          {
            statusCode: 401,
            type: "Unauthorized",
            message: "Invalid token",
          },
          req,
          res
        );
        break;
      case error instanceof jwt.TokenExpiredError:
        errorHandler(
          {
            statusCode: 401,
            type: "Unauthorize",
            message: "Token has expired",
          },
          req,
          res
        );
        break;
      default:
        errorHandler(
          {
            statusCode: 500,
            type: "Internal Server Error",
            message: "An error occurred",
          },
          req,
          res
        );
        break;
    }
  }
};

export default authMiddleware;
