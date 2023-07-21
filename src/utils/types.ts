// tag type
export interface tagType {
  name: string;
  slug: string;
}

// post type
export interface postType {
  title: string;
  slug: string;
  author: string;
  content: string;
  tags: tagType[];
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
