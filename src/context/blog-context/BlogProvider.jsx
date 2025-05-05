import { useState } from "react";
import { BlogContext } from "./BlogContext";
import blogDatas from "../../assets/data/blogData";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(blogDatas);

  const updateBlog = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };
  
  const data = {
    blogs,
    setBlogs,
    updateBlog,
  };

  return <BlogContext.Provider value={data}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
