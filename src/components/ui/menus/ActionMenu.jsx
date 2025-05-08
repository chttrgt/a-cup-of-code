import React, { useState } from "react";
import { useCihatBlog } from "../../../context/blog-context/BlogContext";
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete, MdShare } from "react-icons/md";
import "./ActionMenu.css";

const ActionMenu = ({ bid }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { setBlogs } = useCihatBlog();

  const handleDeleteBlogPost = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== bid));
    }
  };

  const handleShowActionMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="action-menu-container">
      <button className="dots-button" onClick={handleShowActionMenu}>
        <HiDotsVertical size={24} />
      </button>
      <div className={`action-menu ${showMenu ? "show" : ""}`}>
        <button onClick={handleDeleteBlogPost}>
          <MdDelete size={24} />
          <span>Delete</span>
        </button>
        <button onClick={() => {}}>
          <MdShare size={24} />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ActionMenu;
