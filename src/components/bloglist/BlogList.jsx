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
          description={
            blog?.description?.length > 30
              ? blog.description.substring(0, 30).concat("...")
              : blog.description
          }
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
