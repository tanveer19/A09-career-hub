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
      <ul></ul>
    </div>
  );
};

export default AppliedJobs;
