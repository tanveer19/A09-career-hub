import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 text-center">
          <h1 className="">
            One Step <br /> Closer To Your <br /> <span>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
        <div className="col-6">
          <img src="https://picsum.photos/id/20/500/300" alt="" />
        </div>
      </div>
      <div className="row text-center">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="category-container">
          {categories.map((category) => (
            <div className="col-4">
              <img src={category.logo} alt="" />
              <h3>{category.name}</h3>
              <p>{category.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
