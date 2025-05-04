import React, { useState } from "react";
import BlogList from "./components/bloglist/BlogList";
import Header from "./components/header/Header";
import blogDatas from "./assets/data/blogData";
import Footer from "./components/footer/Footer";
import AddButton from "./components/ui/AddButton";
import AddingForm from "./components/ui/AddingForm";

const App = () => {
  const [blogs, setBlogs] = useState(blogDatas);
  const [showAddingForm, setShowAddingForm] = useState(false);
  const authors = blogDatas.map((blog) => blog.author);
  console.log("BLOGS: ", blogs);
  return (
    <>
      <Header setBlogs={setBlogs} />
      <BlogList blogs={blogs} />
      <AddButton onClick={() => setShowAddingForm(true)} />
      {showAddingForm && (
        <AddingForm
          authors={authors}
          onClose={() => setShowAddingForm(false)}
          setBlogs={setBlogs}
        />
      )}
      <Footer />
    </>
  );
};

export default App;
