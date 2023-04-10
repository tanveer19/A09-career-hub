import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <nav>
      <Link to="/">Job Junction</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/appliedJobs">Applied Jobs</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/apply">
        <button className="primary">Start Applying</button>
      </Link>
    </nav>
  );
};

export default Header;
