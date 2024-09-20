import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="">
        <div className="flex justify-between my-5">
          <div className="col-4 text-center">
            <Link to="/">
              <h3 className="text-2xl font-bold"> Job Junction</h3>
            </Link>
          </div>
          <div className="space-x-5">
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/appliedJobs">Applied Jobs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="col-4">
            <Link to="/apply">
              <button type="button" className="btn btn-primary text-white">
                Start Applying
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
