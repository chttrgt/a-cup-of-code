import React from "react";
import { useNavigate } from "react-router-dom";
import DeletePostImage from "../../assets/images/bin.png";
import "../../assets/css/BlogItem.css";
import { useCihatBlog } from "../../context/blog-context/BlogContext";

const BlogItem = ({ bid, title, description, image, author, avatar, date }) => {
  const { setBlogs } = useCihatBlog();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/${bid}`);
  };

  const handleDeleteBlogPost = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== bid));
    }
  };

  return (
    <div className="post-card" onClick={handleClick}>
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
          <div className="delete-post" onClick={handleDeleteBlogPost}>
            <img
              src={DeletePostImage}
              alt="Delete Post"
              width={20}
              height={20}
              className="delete-post-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
