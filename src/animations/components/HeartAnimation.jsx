import { FaHeart } from "react-icons/fa";
import "../css/HeartAnimation.css";

const HeartAnimation = ({ showHeart }) => {
  return (
    <div className={`heart-animation ${showHeart ? "active" : ""}`}>
      <FaHeart />
    </div>
  );
};

export default HeartAnimation;
