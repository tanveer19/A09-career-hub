import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = getStoredJobApplications();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => console.log(job));
    }
  }, []);
  return (
    <div>
      <h2>Applied Jobs</h2>
    </div>
  );
};

export default AppliedJobs;
