import React from "react";
import { useParams } from "react-router-dom";
import blogDatas from "../../assets/data/blogData";
import "../../assets/css/BlogDetail.css";

const BlogDetail = () => {
  const { bid } = useParams();
  const blog = blogDatas.find((blog) => blog.id === +bid);

  if (!blog) {
    return <div className="blog-not-found">Blog post not found!</div>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-header">
        <h1>{blog.title}</h1>
        <div className="blog-detail-meta">
          <img src={blog.avatar} alt={blog.author} className="author-avatar" />
          <div className="author-info">
            <p className="author-name">{blog.author}</p>
            <p className="publish-date">
              {new Date(blog.date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
      </div>
      <div className="blog-detail-content">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <p className="blog-description">{blog.description}</p>
        <div className="blog-content">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
