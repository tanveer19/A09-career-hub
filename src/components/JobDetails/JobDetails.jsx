import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const { companyName } = job;
  console.log(companyName);
  return (
    <div>
      <h3>company name: {companyName}</h3>
    </div>
  );
};

export default JobDetails;
