import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="main-layout">
        <header>
          <Header />
        </header>
        <div className="content">
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
