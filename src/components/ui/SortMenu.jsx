import React from "react";
import SortButton from "./SortButton";
import "./SortMenu.css";

const SortMenu = ({ showMenu }) => {
  return (
    <div className={`sort-menu ${showMenu ? "active" : ""}`}>
      <SortButton />
      <SortButton sortBy="author" />
    </div>
  );
};

export default SortMenu;
