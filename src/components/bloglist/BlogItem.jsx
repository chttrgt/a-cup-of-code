import React from "react";
import { useNavigate } from "react-router-dom";
import ActionMenu from "../ui/menus/ActionMenu";
import "./BlogItem.css";
import FeedbackButton from "../ui/buttons/FeedbackButton";

const BlogItem = ({
  bid,
  title,
  description,
  image,
  author,
  avatar,
  date,
  likeCount,
  commentCount,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${bid}`);
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <div className="post-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="overlay"></div>
        <h2 className="post-title">{title}</h2>
        <ActionMenu bid={bid} />
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
          <FeedbackButton likeCount={likeCount} commentCount={commentCount} />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
