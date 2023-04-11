import React from "react";
import "./Home.css";

const Home = () => {
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
    </div>
  );
};

export default Home;
