import path from "path";
import fs from "fs";

const POSTS_PATH = path.join(process.cwd(), "md/**/*.md");

export const getSlugs = () => {
  const files = fs.readdirSync(POSTS_PATH);
  console.log(files);
};

export const getAllSubjectPosts = () => {
  getSlugs();
};
