import React, { useState } from "react";
import BlogList from "./components/bloglist/BlogList";
import Header from "./components/header/Header";
import blogDatas from "./assets/data/blogData";

const App = () => {
  const [blogs, setBlogs] = useState(blogDatas);
  return (
    <>
      <Header setBlogs={setBlogs} />
      <BlogList blogs={blogs} />
    </>
  );
};

export default App;
