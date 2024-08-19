import React from "react";

const Category = ({ category }) => {
  return (
    <div className="category p-2">
      <img src={category.logo} alt="" />
      <h5>{category.name}</h5>
      <p>{category.jobs} Jobs Available</p>
    </div>
  );
};

export default Category;
