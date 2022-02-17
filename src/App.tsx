import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import SearchInput from "./components/SearchInput";
import SearchResultCard from "./components/SearchResults/SearchResultCard";
import SearchResultHeader from "./components/SearchResults/SearchResultHeader";
import Filter from "./components/Ui/Filter";
import { categoryData, pageLimit } from "./contants";
import { Empty, Layout, Space } from "antd";
import { getJobsList } from "./Services/ApiClient";
import { useDebounce } from "use-debounce";
import Loader from "./components/Ui/Loader";
const { Footer, Content } = Layout;

interface AllJobs {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  job_type: string;
  candidate_required_location: string;
  salary: string;
}

function App() {
  const [query, setQuery] = useState<string | null>(null);
  const [jobs, setJobs] = useState<AllJobs[]>();
  const [sort, setSort] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");
  const [jobCount, setjobCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [value] = useDebounce(query, 400);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getJobs();
  }, [sort, category, value, limit]);

  const onTextChange = (text: string) => {
    setQuery(text);
    // console.log(text);
  };
  const onSortSelect = (text: string) => {
    setSort(text);
  };

  const onCategorySelect = (text: string) => {
    setCategory(text);
  };

  const changeLimit = (value: number) => {
    setLimit(value);
  };

  const getJobs = async () => {
    setLoading(true);
    try {
      const { data } = await getJobsList(query, sort, category, limit);
      console.log(data);
      setjobCount(data?.["job-count"]);
      setJobs(data.jobs);
    } catch (error) {
      let msg = (error as Error).message;
      console.log(msg);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  console.log(query);

  return (
    <Layout>
      <div className="header">
        <h2>Find A Best Job For You here</h2>
      </div>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="App">
          <SearchInput
            onTextChange={onTextChange}
            text="Search the remote jobs you want"
          />
          <div>
            <Filter
              options={categoryData}
              value=""
              onSelect={onCategorySelect}
            />
            <div
              style={{
                display: "flex",
              }}
            >
              <div>
                <span
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Page Limit
                </span>
                <Filter
                  disabled={false}
                  value={10}
                  options={pageLimit}
                  onSelect={changeLimit}
                />
              </div>
              <div>
                <span
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  Choose Company
                </span>
                <Filter
                  disabled={true}
                  options={pageLimit}
                  onSelect={changeLimit}
                />
              </div>
            </div>
          </div>
          <SearchResultHeader matches={jobCount} onSelect={onSortSelect} />
          <div
            style={{
              height: "100vh",
              overflow: "scroll",
              // width: "100%",
            }}
          >
            <Space
              direction="vertical"
              size={25}
              style={{
                width: "100%",
              }}
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  {jobCount > 0 ? (
                    <>
                      {jobs?.map((job) => (
                        <SearchResultCard jobData={job} />
                      ))}
                    </>
                  ) : (
                    <Empty
                      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                      imageStyle={{
                        height: 60,
                      }}
                      description={
                        <span
                          style={{
                            fontWeight: "bolder",
                          }}
                        >
                          No Jobs Found
                        </span>
                      }
                    ></Empty>
                  )}
                </>
              )}
            </Space>
          </div>
        </div>
      </Content>
      <Footer className="footer">
        <h3>All rights reserved</h3>
      </Footer>
    </Layout>
  );
}

export default App;
