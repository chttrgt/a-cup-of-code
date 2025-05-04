import React, { useState } from "react";
import { blogDatas } from "../../assets/data/blogData";
import BlogItem from "./BlogItem";
import "../../assets/css/BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogDatas);
  return (
    <div className="blog-list">
      {blogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            description={blog.description.substring(0, 30).concat("...")}
            image={blog.image}
            author={blog.author}
            avatar={blog.avatar}
            date={blog.date}
          />
        ))}
    </div>
  );
};

export default BlogList;
