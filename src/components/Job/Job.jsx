import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <div className="container">
      <div className="col">
        <img className="img-fluid" src={job.companyLogo} alt="logo" />
        <h6>{job.jobTitle}</h6>
        <p>{job.companyName}</p>
        <button type="button" className="btn btn-primary">
          {job.remote}
        </button>
        <button type="button" className="btn btn-primary">
          {job.time}
        </button>
        <br />
        <span>{job.location}</span> <span>{job.salary}</span> <br />
        <button type="button" className="btn btn-primary">
          <Link to={`/job/${job.id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
