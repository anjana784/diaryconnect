// date type
export interface dateType {
  year: number;
  month: string;
  date: number;
}

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
  published: dateType;
  lastUpdated: dateType;
  content: string;
  tags: tagType[];
  comments: commentType[];
}

// user type
export interface userType {
  username: string;
  email: string;
  password: string;
  roll: string;
}

// comment type
export interface commentType {
  user: userType;
  content: string;
  date: dateType;
}
