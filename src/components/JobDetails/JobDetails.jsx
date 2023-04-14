import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const [target, setTarget] = useState({});

  const { id } = useParams();
  // console.log(job);

  useEffect(() => {
    const findById = (id) => {};
  }, []);

  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default JobDetails;
