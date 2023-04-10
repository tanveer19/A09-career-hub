import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Job Junction</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/appliedJobs">Applied Jobs</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Header;
