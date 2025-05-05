import React, { useState } from "react";
import coffeLogo from "../../assets/images/coffe.png";
import SortUpLogo from "../../assets/images/sort-up.png";
import SortUpDate from "../../assets/images/timetable.png";
import SortUpAuthor from "../../assets/images/verified-profile.png";
import blogDatas from "../../assets/data/blogData";
import "../../assets/css/Header.css";
import { Link, useLocation } from "react-router-dom";
import { useCihatBlog } from "../../context/blog-context/BlogContext";


const Header = () => {
  const location = useLocation();
  const { setBlogs } = useCihatBlog();
  const [showMenu, setShowMenu] = useState(false);
  const [sortByDateASC, setSortByDateASC] = useState(false);
  const [sortByAuthorASC, setSortByAuthorASC] = useState(false);
  const handleSearch = (e) => {
    const searchPost = e.target.value.toLowerCase();
    if (searchPost === "") {
      setBlogs(blogDatas);
    } else {
      const filteredPosts = blogDatas.filter((post) =>
        post.title.toLowerCase().includes(searchPost)
      );
      setBlogs(filteredPosts);
    }
  };

  const handleShowSortUpMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleSortByDate = () => {
    if (sortByDateASC) {
      setBlogs((prev) =>
        [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
      setSortByDateASC(false);
    } else {
      setBlogs((prev) =>
        [...prev].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
      setSortByDateASC(true);
    }
  };

  const handleSortByAuthor = () => {
    if (sortByAuthorASC) {
      setBlogs((prev) =>
        [...prev].sort((a, b) => a.author.localeCompare(b.author))
      );
      setSortByAuthorASC(false);
    } else {
      setBlogs((prev) =>
        [...prev].sort((b, a) => a.author.localeCompare(b.author))
      );
      setSortByAuthorASC(true);
    }
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
          <p className="coffe-logo-text">A Cup Of Code</p>
        </Link>
      </div>
      {!location.pathname.includes("blog") && (
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <img
            src={SortUpLogo}
            alt="coffe-logo-image"
            className="sortUp-logo-image"
            onClick={handleShowSortUpMenu}
          />
        </div>
      )}
      <div className={`sortUp-menu ${showMenu ? "active" : ""}`}>
        <button className="btn-sort" onClick={handleSortByDate}>
          <img
            src={SortUpDate}
            alt="sort-up-date-image"
            className="sortUp-date-image"
          />
          By Date {sortByDateASC ? "↑" : "↓"}
        </button>
        <button className="btn-sort" onClick={handleSortByAuthor}>
          <img
            src={SortUpAuthor}
            alt="sort-up-author-image"
            className="sortUp-author-image"
          />
          By Author {!sortByAuthorASC ? "↑" : "↓"}
        </button>
      </div>
    </header>
  );
};

export default Header;
