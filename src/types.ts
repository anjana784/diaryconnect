// date type
export interface dateType {
  year: number;
  month: string;
  date: number;
}

// post type
export interface postType {
  title: string;
  slug: string;
  author: string;
  published: dateType;
  lastUpdated: dateType;
  content: string;
  comments: commentType[];
}

// user type
export interface userType {
  username: string;
  password: string;
  email: string;
}

// comment type
export interface commentType {
  user: userType;
  content: string;
  date: dateType;
}
