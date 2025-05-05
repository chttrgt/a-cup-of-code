import { useState } from "react";
import { BlogContext } from "./BlogContext";
import blogDatas from "../../assets/data/blogData";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(blogDatas);
  const data = {
    blogs,
    setBlogs,
  };

  return <BlogContext.Provider value={data}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
