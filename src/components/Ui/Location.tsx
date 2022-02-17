import React from "react";

const Location = ({ location }: { location: string }): JSX.Element => {
  return (
    <div className="location">
      <span>{location}</span>
    </div>
  );
};

export default Location;
