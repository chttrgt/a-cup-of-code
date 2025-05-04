import React from "react";
import AddNewPost from "../../assets/images/add.png";
import "../../assets/css/AddButton.css";

const AddButton = () => {
  return (
    <button className="add-button" aria-label="Add new blog post">
      <img className="add-icon" src={AddNewPost} alt="Add new post" />
    </button>
  );
};

export default AddButton;
