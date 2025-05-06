import React from "react";
import AddNewPost from "../../../assets/images/add.png";
import "./AddButton.css";

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      <img className="add-icon" src={AddNewPost} alt="Add new post" />
    </button>
  );
};

export default AddButton;
