import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import { useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplications();

    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobsApplied = [];

      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="text-2xl">Applied Jobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1 ">Filter By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <div key={job.id} className="my-5 border flex gap-3">
            <div className="bg-gray-200 p-5 w-52">
              <img
                className="max-w-64 max-h-24 "
                src={job.companyLogo}
                alt="logo"
              />
            </div>
            <div className="flex-col flex justify-center">
              <h2 className="font-bold">{job.jobTitle}</h2>
              <h2>{job.companyName}</h2>
              {job.remote_onsite}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
