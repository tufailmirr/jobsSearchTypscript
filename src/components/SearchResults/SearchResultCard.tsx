import React from "react";
import Category from "../Ui/Category";
import Location from "../Ui/Location";
import Price from "../Ui/Price";
import "./SearchResultCard.css";

interface singleJobData {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  job_type: string;
  candidate_required_location: string;
  salary: string;
  //   [x: string]: any;
}

const SearchResultCard = ({ jobData }: { jobData: singleJobData }) => {
  return (
    <div className="searchResultCard">
      <div className="logo">
        <img src={`${jobData.company_logo}`} alt="s"></img>
      </div>
      <div className="cardBody">
        <div>
          <h2>{jobData.title}</h2>
        </div>
        <div className="mainJobTags">
          <Location location={jobData.candidate_required_location} />
          <Price price={jobData.salary} />
          <Category category={jobData.category} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
