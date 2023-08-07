import type { RequestHandler } from "express";
import * as jwt from "jsonwebtoken";

const authMiddleware: RequestHandler = (req, res, next) => {
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
};

export default authMiddleware;
