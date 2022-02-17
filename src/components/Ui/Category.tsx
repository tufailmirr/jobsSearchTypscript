import React from "react";

const Category = ({ category }: { category: string }): JSX.Element => {
  return (
    <>
      {category && (
        <div className="category">
          <span>Software Development</span>
        </div>
      )}
    </>
  );
};

export default Category;
