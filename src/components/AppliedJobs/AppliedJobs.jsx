import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";
import { useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

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
      console.log(jobs, storedJobIds, jobsApplied);
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Applied Jobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.jobTitle}
              {job.companyName}:{job.remote_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
