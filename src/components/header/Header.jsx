import React, { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import SearchInput from "../ui/inputs/SearchInput";
import SortMenu from "../ui/menus/SortMenu";
import blogDatas from "../../assets/data/blogData";
import coffeLogo from "../../assets/images/coffe.png";
import { FaSort } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { setBlogs } = useCihatBlog();
  const [showMenu, setShowMenu] = useState(false);
  const [, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    const searchPost = e.target.value.toLowerCase();
    setSearchParams({ page: "0" });

    if (searchPost === "") {
      setBlogs(blogDatas);
    } else {
      const filteredPosts = blogDatas.filter((post) =>
        post.title.toLowerCase().includes(searchPost)
      );
      setBlogs(filteredPosts);
    }
  };

  const handleShowSortMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="glass-header">
      <div className="coffe-logo">
        <Link to="/" className="coffe-logo-link">
          <img
            src={coffeLogo}
            alt="coffe-logo-image"
            className="coffe-logo-image"
          />
          <p
            className={`coffe-logo-text ${
              !location.pathname.includes("blog") ? "hide-text" : ""
            }`}
          >
            A Cup Of Code
          </p>
        </Link>
      </div>
      {!location.pathname.includes("blog") && (
        <div className="search-container">
          <SearchInput handleSearch={handleSearch} />
          <FaSort
            size={24}
            style={{ opacity: ".7" }}
            onClick={handleShowSortMenu}
          />
        </div>
      )}
      <SortMenu showMenu={showMenu} onClose={handleShowSortMenu} />
    </header>
  );
};

export default Header;
