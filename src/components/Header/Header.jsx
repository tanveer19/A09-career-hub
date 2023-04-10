import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <nav className="header">
      <div className="container">
        <div className="row ">
          <div className="col-4 text-center">
            <Link to="/">
              <h3 className="text-dark"> Job Junction</h3>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedJobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="col-4">
            <Link to="/apply">
              <button type="button" className="btn btn-primary">
                Start Applying
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
