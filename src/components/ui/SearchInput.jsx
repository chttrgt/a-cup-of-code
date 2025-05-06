import React from "react";
import "./SearchInput.css";

const SearchInput = ({ handleSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
