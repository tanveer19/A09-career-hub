import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const [job2, setJob2] = useState({});

  const { id } = useParams();
  console.log(job);

  useEffect(() => {
    // const exists = job2.find((ts) => ts._id === job._id);
  }, []);
  //   const { id, companyName } = job;
  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default JobDetails;
