import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCihatForm } from "../../context/form-context/FormContext";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import FeedbackButton from "../ui/buttons/FeedbackButton";
import HeartAnimation from "../../animations/components/HeartAnimation";
import { TiArrowBack } from "react-icons/ti";
import { MdModeEditOutline } from "react-icons/md";
import "./BlogDetail.css";

const BlogDetail = ({ onEditBlog }) => {
  const { bid } = useParams();
  const { blogs } = useCihatBlog();
  const blog = blogs.find((blog) => blog.id === bid);
  const [showHeart, setShowHeart] = useState();
  const [likesCount, setLikesCount] = useState(blog.likeCount);
  const { setShowActionForm } = useCihatForm();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!blog) {
    return <div className="blog-not-found">Blog post not found!</div>;
  }

  const handleEdit = () => {
    onEditBlog(blog);
    setShowActionForm(true);
  };

  const handleLike = () => {
    setShowHeart(true);
    setLikesCount((prevCount) => prevCount + 1);
    setTimeout(() => {
      setShowHeart(false);
    }, 300);
  };

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
            <FeedbackButton
              likeCount={likesCount}
              commentCount={blog.commentCount}
              onLikeClick={handleLike}
            />
          </div>
        </div>
        <div className="blog-post-update">
          <TiArrowBack
            className="bp-update-back-icon"
            title="Go Back"
            onClick={() => navigate(-1)}
          />
          <MdModeEditOutline
            className="bp-update-icon"
            title="Edit"
            onClick={handleEdit}
          />
        </div>
      </div>

      <div className="blog-detail-content">
        <HeartAnimation showHeart={showHeart} />
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <p className="blog-description">{blog.description}</p>
        <div className="blog-content">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
