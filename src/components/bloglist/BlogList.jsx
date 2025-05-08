import React from "react";
import BlogItem from "./BlogItem";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import "./BlogList.css";

const BlogList = () => {
  const { blogs } = useCihatBlog();

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          bid={blog.id}
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
          likeCount={blog.likeCount}
          commentCount={blog.commentCount}
        />
      ))}
    </div>
  );
};

export default BlogList;
