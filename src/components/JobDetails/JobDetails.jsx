import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  //for loader: () => fetch("/job.json"),
  const jobs = useLoaderData();

  // for   path: "/job/:id",
  const { id } = useParams();

  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    companyLogo,
    jobTitle,
    companyName,
    remote,
    time,
    location,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
  } = job;
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("toasted");
  };
  return (
    <div>
      <h2 className="text-3xl mb-10">Job Details of: {jobTitle} </h2>
      <div className="grid gap-4 md:grid-cols-4 ">
        <div className="border md:col-span-3">
          <h3>
            <span className="font-bold">Job Description:</span> {jobDescription}
          </h3>
          <h3>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {jobResponsibility}
          </h3>
        </div>
        <div className="border">
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
