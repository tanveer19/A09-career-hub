import React from "react";

const Category = ({ category }) => {
  return (
    <div className="category">
      <img src={category.logo} alt="" />
      <h5>{category.name}</h5>
      <p>{category.jobs}</p>
    </div>
  );
};

export default Category;
