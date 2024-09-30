import React from "react";

const Category = ({ category }) => {
  return (
    <div className="category p-5 bg-[#9873FF1A] rounded-lg max-w-80">
      <img
        src={category.logo}
        alt=""
        className="bg-[#9873FF1A] p-3 rounded-lg"
      />
      <h5>{category.name}</h5>
      <p>{category.jobs} Jobs Available</p>
    </div>
  );
};

export default Category;
