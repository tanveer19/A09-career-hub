import React from "react";

const Category = ({ category }) => {
  return (
    <div className="col-12 category">
      <img src={category.logo} alt="" />
      <h5>{category.name}</h5>
      <p>{category.jobs} Jobs Available</p>
    </div>
  );
};

export default Category;
