import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  // console.log(job);
  return (
    <div className="">
      <div className="">
        <img className="max-w-64 max-h-24" src={job.companyLogo} alt="logo" />
        <h6>{job.jobTitle}</h6>
        <p>{job.companyName}</p>
        <button type="button" className="btn btn-light">
          {job.remote}
        </button>
        <button type="button" className="btn btn-light">
          {job.time}
        </button>
        <br />
        <span>{job.location}</span> <span>{job.salary}</span> <br />
        <Link to={`/job/${job.id}`}>
          <button type="button" className="btn btn-primary">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
