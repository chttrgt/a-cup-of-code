import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { formatNumber } from "../../../helpers/FormatNumber";
import "./FeedbackButton.css";

const FeedbackButton = ({ likeCount, commentCount }) => {
  const handleLike = (e) => {
    e.stopPropagation();
  };
  const handleComment = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="feedback-buttons">
      <div onClick={handleLike} className="like-button">
        <BiLike size={17} />
        <span>{formatNumber(likeCount)}</span>
      </div>
      <div onClick={handleComment} className="comment-button">
        <FaRegComment size={15} />
        <span>{formatNumber(commentCount)}</span>
      </div>
    </div>
  );
};

export default FeedbackButton;
