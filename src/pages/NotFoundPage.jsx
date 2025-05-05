import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Oops! Page Not Found</h1>
        <p className="notfound-description">
          Looks like you&apos;ve drifted into the cosmic void! ✨
        </p>
        <Link to="/" className="notfound-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
