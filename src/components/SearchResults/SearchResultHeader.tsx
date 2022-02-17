import React from "react";
import Filter from "../Ui/Filter";
import "./SearchResultHeader.css";

const SearchResultHeader = () => {
  const onSelect = (text: string) => {
    console.log(text);
  };
  return (
    <div className="searchResultHeader">
      <div className="searchResultHeader__left">
        <strong>1540</strong>
        <span>mathcing found</span>
      </div>
      <div className="searchResultHeader__right">
        <div>
          <span>Sort By</span>
        </div>{" "}
        <div>
          <Filter onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultHeader;
