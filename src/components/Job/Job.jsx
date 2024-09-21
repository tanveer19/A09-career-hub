import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  // console.log(job);
  return (
    <div className="border max-w-96 p-10">
      <img className="max-w-64 max-h-24" src={job.companyLogo} alt="logo" />
      <h6>{job.jobTitle}</h6>
      <p className="py-2">{job.companyName}</p>
      <button
        type="button"
        className="border-[#7E90FE] text-[#7E90FE] mr-4 border px-5 py-2 rounded"
      >
        {job.remote}
      </button>
      <button
        type="button"
        className="border-[#7E90FE] text-[#7E90FE] mr-4 border px-5 py-2 rounded"
      >
        {job.time}
      </button>
      <br />
      <span className="py-2 pr-2 inline-block">{job.location}</span>
      <span>{job.salary}</span> <br />
      <Link to={`/job/${job.id}`}>
        <button type="button" className="btn btn-primary">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
