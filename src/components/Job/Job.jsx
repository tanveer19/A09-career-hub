import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remote_onsite,
    time,
    location,
    salary,
  } = job;

  return (
    <div className="border p-10">
      <img className="max-w-64 max-h-24" src={companyLogo} alt="logo" />
      <h6>{jobTitle}</h6>
      <p className="py-2">{companyName}</p>
      <button
        type="button"
        className="border-[#7E90FE] text-[#7E90FE] mr-4 border px-5 py-2 rounded"
      >
        {remote_onsite}
      </button>
      <button
        type="button"
        className="border-[#7E90FE] text-[#7E90FE] mr-4 border px-5 py-2 rounded"
      >
        {time}
      </button>
      <div className="my-4 flex flex-col md:flex-row gap-4">
        <h2 className="flex">
          <MdLocationOn className="text-2xl mr-2"></MdLocationOn>
          {location}
        </h2>
        <h2 className="flex">
          <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>
          {salary}
        </h2>
      </div>
      <Link to={`/job/${id}`}>
        <button type="button" className="btn btn-primary">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
