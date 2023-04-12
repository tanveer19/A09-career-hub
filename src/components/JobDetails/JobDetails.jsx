import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <h3>Hi</h3>
    </div>
  );
};

export default JobDetails;
