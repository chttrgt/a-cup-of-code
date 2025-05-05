import React, { useState } from "react";
import CloseAddingFormImage from "../../assets/images/delete.png";
import "../../assets/css/AddingForm.css";
import { useCihatBlog } from "../../context/BlogContext";

const AddingForm = ({ onClose }) => {
  const { blogs, setBlogs } = useCihatBlog();
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    avatar: "",
    date: "",
    content: "",
  });

  const authors = blogs.map((blog) => blog.author);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCleanForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      author: "",
      avatar: "",
      date: "",
      content: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      ...formData,
      id: blogs.length + 1,
      date: new Date(formData.date).toLocaleDateString("en-US"),
    };

    setBlogs((prev) => [newBlogPost, ...prev]);
    handleClose();
  };

  return (
    <div className={`form-overlay ${isClosing ? "closing" : ""}`}>
      <form
        className={`adding-form ${isClosing ? "closing" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="form-header">
          <h2>Add New Blog Post</h2>
          <div className="close-button" onClick={handleClose}>
            <img
              width={10}
              height={10}
              src={CloseAddingFormImage}
              alt="CloseAddingFormImage"
            />
          </div>
        </div>

        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Author
          <select
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          >
            <option value="">Select author</option>
            {authors.map((author, idx) => (
              <option key={idx} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>

        <label>
          Avatar URL
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Content
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-buttons">
          <button type="button" onClick={handleCleanForm}>
            Clean Form
          </button>
          <button type="submit">Add New Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddingForm;
