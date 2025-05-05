import React, { useState } from "react";
import BlogList from "../components/bloglist/BlogList";
import AddingForm from "../components/ui/AddingForm";
import AddButton from "../components/ui/AddButton";
import blogDatas from "../assets/data/blogData";

const HomePage = () => {
  const [blogs, setBlogs] = useState(blogDatas);
  const [showAddingForm, setShowAddingForm] = useState(false);
  const authors = blogDatas.map((blog) => blog.author);
  return (
    <>
      <BlogList blogs={blogs} />
      <AddButton onClick={() => setShowAddingForm(true)} />
      {showAddingForm && (
        <AddingForm
          authors={authors}
          onClose={() => setShowAddingForm(false)}
          setBlogs={setBlogs}
          blogs={blogs}
        />
      )}
    </>
  );
};

export default HomePage;
