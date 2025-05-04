import React from "react";
import BlogItem from "./BlogItem";
import "../../assets/css/BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
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
