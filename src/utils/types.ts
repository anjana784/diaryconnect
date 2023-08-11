// tag type
export interface tagType {
  name: string;
  slug: string;
}

// post type
export interface postType {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  featuredImage: string;
  content: string;
  tags: string[];
  comments: commentType[];
}

// user type
export interface userType {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
  verified: boolean;
  verificationToken: string | null;
}

// comment type
export interface commentType {
  user: userType;
  content: string;
}

// response object type

// error type
export interface appErrorType {
  statusCode: number;
  type: string;
  message: string;
}
