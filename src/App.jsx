import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layout/MainLayout";
import RootLayout from "./layout/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:bid" element={<BlogDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
