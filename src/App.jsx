import React, { useState } from "react";
import BlogList from "./components/bloglist/BlogList";
import Header from "./components/header/Header";
import blogDatas from "./assets/data/blogData";
import Footer from "./components/footer/Footer";
import AddButton from "./components/ui/AddButton";

const App = () => {
  const [blogs, setBlogs] = useState(blogDatas);
  return (
    <>
      <Header setBlogs={setBlogs} />
      <BlogList blogs={blogs} />
      <Footer />
      <AddButton />
    </>
  );
};

export default App;
