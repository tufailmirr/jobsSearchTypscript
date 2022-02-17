import React from "react";
import { sortData } from "../../contants";
import Filter from "../Ui/Filter";
import "./SearchResultHeader.css";

const SearchResultHeader = ({
  matches,
  onSelect,
}: {
  matches: number;
  onSelect: (text: string) => void;
}): JSX.Element => {
  return (
    <div className="searchResultHeader">
      <div className="searchResultHeader__left">
        <span>{matches}</span>
        <span>jobs found</span>
      </div>
      <div className="searchResultHeader__right">
        <div>
          <span>Sort By</span>
        </div>{" "}
        <div>
          <Filter options={sortData} disabled={true} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultHeader;
