import { body } from "express-validator";

const signUpSchema = [
  body("username")
    .isString()
    .withMessage("username must be a string")
    .isLength({ min: 3, max: 20 })
    .withMessage("username must be between 3 and 20 characters")
    .trim()
    .escape(),
  body("email")
    .isEmail()
    .withMessage("email must be a valid email address")
    .normalizeEmail(),
  body("password")
    .isString()
    .withMessage("password must be a string")
    .isLength({ min: 8, max: 20 })
    .withMessage("password must be between 8 and 20 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .withMessage(
      "password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .trim()
    .escape(),
];

export default signUpSchema;
