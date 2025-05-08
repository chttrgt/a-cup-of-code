import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { formatNumber } from "../../../helpers/FormatNumber";
import "./FeedbackButton.css";

const FeedbackButton = ({ likeCount, commentCount, onLikeClick }) => {
  const handleComment = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="feedback-buttons">
      <div onClick={(e) => onLikeClick(e)} className="like-button">
        <FaRegHeart size={15} />
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
