import React, { useState } from "react";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import {
  FaSortAlphaDown,
  FaSortAlphaDownAlt,
  FaSortNumericDown,
  FaSortNumericDownAlt,
} from "react-icons/fa";
import "./SortButton.css";

const SortButton = ({ sortBy = "date" }) => {
  const { setBlogs } = useCihatBlog();
  const [sortPost, setSortPost] = useState(false);

  const handleSort = () => {
    setSortPost((prev) => !prev);
    if (sortBy === "date")
      sortPost
        ? setBlogs((prev) =>
            [...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
          )
        : setBlogs((prev) =>
            [...prev].sort((a, b) => new Date(a.date) - new Date(b.date))
          );
    else if (sortBy === "author")
      sortPost
        ? setBlogs((prev) =>
            [...prev].sort((b, a) => a.author.localeCompare(b.author))
          )
        : setBlogs((prev) =>
            [...prev].sort((a, b) => a.author.localeCompare(b.author))
          );
  };

  return (
    <button className="btn-sort" onClick={handleSort}>
      {sortBy === "date" ? (
        sortPost ? (
          <div className="sort sort-date">
            <span>Sort by Date</span>
            <FaSortNumericDownAlt size={21} />
          </div>
        ) : (
          <div className="sort sort-date">
            <span>Sort by Date</span>
            <FaSortNumericDown size={21} />
          </div>
        )
      ) : sortBy === "author" ? (
        sortPost ? (
          <div className="sort sort-author">
            <span>Sort by Author</span>
            <FaSortAlphaDownAlt size={21} />
          </div>
        ) : (
          <div className="sort sort-author">
            <span>Sort by Author</span>
            <FaSortAlphaDown size={21} />
          </div>
        )
      ) : null}
    </button>
  );
};

export default SortButton;
