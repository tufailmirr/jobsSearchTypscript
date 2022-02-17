import React from "react";

const Price = ({ price }: { price: string }): JSX.Element | null => {
  return (
    <>
      {" "}
      {price ? (
        <div className="price">
          <span>{price}</span>
        </div>
      ) : null}
    </>
  );
};

export default Price;
