import React, { useEffect, useRef } from "react";
import SortButton from "../buttons/SortButton";
import "./SortMenu.css";

const SortMenu = ({ showMenu, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isSortIcon = e.target.closest(".search-container svg");

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !isSortIcon
      ) {
        onClose();
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu, onClose]);

  return (
    <div className={`sort-menu ${showMenu ? "active" : ""}`} ref={menuRef}>
      <SortButton />
      <SortButton sortBy="author" />
    </div>
  );
};

export default SortMenu;
