import React, { useEffect, useState } from "react";
import "./Home.css";
import Category from "../Category/Category";

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
          <img src="https://picsum.photos/id/20/400/300" alt="" />
        </div>
      </div>
      <div className="row text-center">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="home-container">
          <div className="category-container text-start">
            {categories.map((category) => (
              <Category key={category.id} category={category}></Category>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
