import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionMenu from "../ui/menus/ActionMenu";
import FeedbackButton from "../ui/buttons/FeedbackButton";
import HeartAnimation from "../../animations/components/HeartAnimation";
import "./BlogItem.css";

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
  const [showHeart, setShowHeart] = useState(false);
  const [likesCount, setLikesCount] = useState(likeCount);
  const handleClick = () => {
    navigate(`/blog/${bid}`);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setShowHeart(true);
    setLikesCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setShowHeart(false);
    }, 300);
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <div className="post-image" style={{ backgroundImage: `url(${image})` }}>
        <HeartAnimation showHeart={showHeart} />
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
          <FeedbackButton
            likeCount={likesCount}
            commentCount={commentCount}
            onLikeClick={handleLike}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
