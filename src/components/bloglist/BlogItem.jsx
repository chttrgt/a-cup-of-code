import React from "react";
import "../../assets/css/BlogItem.css";

const BlogItem = ({ title, description, image, author, avatar, date }) => {
  return (
    <div className="post-card">
      <div className="post-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay"></div>
        <h2 className="post-title">{title}</h2>
      </div>
      <div className="post-content">
        <p className="post-description">{description}</p>
        <div className="post-footer">
          <img src={avatar} alt={author} className="author-avatar" />
          <div className="author-info">
            <p className="author-name">{author}</p>
            <p className="publish-date">
              {new Date(date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
