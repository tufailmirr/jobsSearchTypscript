import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="searchResultCard">
      <Skeleton
        avatar
        paragraph={{
          rows: 4,
        }}
        style={{
          width: "100%",
        }}
        // title={false}
        loading={loading}
        active
      >
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
      </Skeleton>
    </div>
  );
};

export default SearchResultCard;
