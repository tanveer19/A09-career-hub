import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import Job from "../Job/Job";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  // jobs = jobs.slice(0, 4);

  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="text-4xl font-bold">
            One Step <br /> Closer To Your <br />
            <span>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button type="button" className="btn btn-primary text-white">
            Get Started
          </button>
        </div>
        <div className="col-6">
          <img
            className="img-fluid"
            src="https://picsum.photos/id/20/400/300"
            alt=""
          />
        </div>
      </div>
      <div className="row text-center">
        <h2 className="text-5xl font-bold my-3">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid">
          <div className="grid grid-cols-4 gap-5  text-start">
            {categories.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
          </div>
        </div>
      </div>
      <div className="my-3 text-center">
        <h2 className="text-5xl font-bold my-5">Featured Jobs </h2>
        <p className="my-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-6 text-start">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className={dataLength === jobs.length ? "hidden" : ""}>
          <button
            onClick={() => setDataLength(jobs.length)}
            type="button"
            className="btn btn-primary"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
