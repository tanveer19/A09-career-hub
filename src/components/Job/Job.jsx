import React from "react";

const Job = ({ job }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={job.companyLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Job;
