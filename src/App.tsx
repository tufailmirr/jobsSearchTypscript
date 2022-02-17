import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import "antd/dist/antd.css";
import SearchInput from "./components/SearchInput";
import SearchResultCard from "./components/SearchResults/SearchResultCard";
import SearchResultHeader from "./components/SearchResults/SearchResultHeader";
import Filter from "./components/Ui/Filter";
import { categoryData } from "./contants";
import { Layout, Space } from "antd";
import { getJobsList } from "./Services/ApiClient";
import { useDebounce } from "use-debounce";
const { Header, Footer, Sider, Content } = Layout;
const a = {
  job_count: 124,
  jobs: [
    {
      id: 1119179,
      url: "https://remotive.io/remote-jobs/software-dev/backend-engineer-senior-1119179",
      title: "Backend Engineer, Senior",
      company_name: "ChowNow",
      company_logo: "https://remotive.io/job/1119179/logo",
      category: "Software Development",
      tags: [
        "amazon",
        "backend",
        "elasticsearch",
        "mobile",
        "mySQL",
        "python",
        "react",
        "redux",
        "saas",
        "security",
        "teaching",
        "growth",
        "design",
        "agile",
        "Engineering",
        "documentation",
        "product",
        "knowledge",
        "data",
        "RESTful",
        "Redis",
        "web",
        "business",
        "infrastructure",
        "python 3",
        "terraform",
        "leadership",
        "privacy",
        "hiring",
        "jenkins",
        "culture",
        "SOLID",
        "events",
        "development",
        "APIs",
        "IT",
        "writing",
        "RESTful APIs",
        "ansible",
        "learning",
        "organization",
        "applications",
        "communication",
        "support",
        "diversity",
        "architecture ",
        "production",
        "insurance",
        "programs",
        "mental health",
        "software",
        "training",
      ],
      job_type: "full_time",
      publication_date: "2022-02-14T19:37:43",
      candidate_required_location: "Anywhere",
      salary: "",
      description:
        '<p>Do you want to build products that connect thousands of food orderers to restaurants every day? Do you love writing PEP-8\'ed, unit-tested, and documented Python? Does the thought of continuous integration and agile workflow encourage you to craft high-quality, well-tested, and resilient methods? Do you feel security, availability, and maintainability are inextricably linked to your application architecture?</p>\n<p> </p>\n<p>Are all() of your answers to the above == True and did you envision that as a list comprehension? If so, keep reading; this might be the product building environment you have been searching for.</p>\n<p> </p>\n<p><strong>Our Product and Technology:</strong></p>\n<p>Our backend applications are written in Python 3. The RESTful APIs we develop enable multiple client-facing platforms, ranging from our website products built with React &amp; Redux to our native mobile applications. We write code to integrate with partners in the restaurant technology space. Depending on our use case, we store data in MySQL RDS, Elasticsearch or Redis.</p>\n<p> </p>\n<p>Our infrastructure-as-code platform is hosted by Amazon Web Services, developed and orchestrated using Ansible and Terraform. We automate as much as we can, utilizing Jenkins for deployments.</p>\n<p> </p>\n<p><strong>About the Position:</strong></p>\n<p>ChowNow’s Engineering Team has built a reliable, stable, and modern platform enabling restaurant owners to accept pickup and delivery orders online. Our “quality product first” approach to engineering drives the team to succeed and has contributed to the success and growth of the company. We are looking for similarly minded engineers who care deeply about the product, the customers, the team members, and the codebase itself. As a Senior Backend Engineer, you will have a deep impact on our platform and the team. You will influence technology choices, support leadership in decision making, solve hard problems, and enable the growth of and contribute to the future architecture of the platform.</p>\n<p> </p>\n<div class="h3">Within 1 month, you\'ll...</div>\n<ul>\n<li>Learn our business model and how it translates to platform architecture and features. We work closely with the product and it influences how we think about the code.</li>\n</ul>\n<ul>\n<li>Master our development patterns and collaborative processes. We work together to make work efficient.</li>\n</ul>\n<ul>\n<li>Read (and write) internal documentation and test your features and systems. We take responsibility for communication and quality.</li>\n</ul>\n<ul>\n<li>Grasp the basics of the platform architecture. Developers share responsibility for our always available APIs.</li>\n</ul>\n<ul>\n<li>Squash a bug or two from your squad’s backlog or ship a small feature to production.</li>\n</ul>\n<p><br><br></p>\n<div class="h3">Within 3 months, you\'ll...</div>\n<ul>\n<li>Have become an expert on your squad’s area of the product and made an impact on it. We celebrate our success by measuring our impact, internally and externally.</li>\n</ul>\n<ul>\n<li>Build, launch, and support your first big feature in one of our many products. We ship with iterative agility.</li>\n</ul>\n<ul>\n<li>Understand how our systems interoperate and be comfortable navigating the stack and infrastructure. We are all generalists, but we specialize in feature areas too.</li>\n</ul>\n<ul>\n<li>Have worked with others in the organization to propose and define the architecture for a major new system, optimization, or feature. We communicate and collaborate on our architecture to achieve security, scalability, and maximum learning.</li>\n</ul>\n<ul>\n<li>Look for opportunities to help your squad ship faster.</li>\n</ul>\n<ul>\n<li>Learn our business model and how it translates to our systems and services. We work closely with the product and it influences how we think about the code.</li>\n</ul>\n<p><br><br></p>\n<div class="h3">Within 6 months, you\'ll...</div>\n<ul>\n<li>Build within reliable estimates. We know this takes time, and we strive to be accurate with each other.</li>\n</ul>\n<ul>\n<li>Feel comfortable as an expert on your team, teaching others and continuing to learn. We want to learn as much as we teach.</li>\n</ul>\n<ul>\n<li>Be an essential part of growing our team by fully participating in the hiring interview process. We share the responsibility to grow our team.</li>\n</ul>\n<ul>\n<li>Have made at least one major cultural or process shift that improves the productivity of your squad.</li>\n</ul>\n<ul>\n<li>Join your squad in end-to-end ownership of a system or component and look for ways to improve and extend it.</li>\n</ul>\n<p><br><br></p>\n<div class="h3">You should apply if:</div>\n<ul>\n<li>You have experience building SaaS products, e-commerce or similar online platforms</li>\n</ul>\n<ul>\n<li>You are excited about new technologies, are able to judge the maturity of the latest innovations, and find practical use for them</li>\n</ul>\n<ul>\n<li>You constantly work to get better at your craft</li>\n</ul>\n<ul>\n<li>You find excitement in learning new business models and transferring such knowledge into beautiful software design</li>\n</ul>\n<ul>\n<li>You like collaborating with multiple stakeholders within and outside the Engineering Team towards a common goal</li>\n</ul>\n<ul>\n<li>You make decisions based on data and evidence</li>\n</ul>\n<ul>\n<li>You enjoy iterative, agile development process with frequent releases</li>\n</ul>\n<ul>\n<li>You take great pleasure in writing quality, highly maintainable code </li>\n</ul>\n<ul>\n<li>You thrive in environments supporting your growth, and where you can support others</li>\n</ul>\n<p><br><br></p>\n<div class="h3">About Our Benefits:</div>\n<ul>\n<li>Competitive Salary</li>\n</ul>\n<ul>\n<li>Ongoing training and growth opportunities.</li>\n</ul>\n<ul>\n<li>A "Best Place to Work" winner multiple times where we focus on creating a great employee experience.</li>\n</ul>\n<ul>\n<li>A remote first culture and monthly stipend offering flexibility to work where you want and how you want.</li>\n</ul>\n<ul>\n<li>Rock solid medical, dental, and vision plans.</li>\n</ul>\n<ul>\n<li>Mental Health Coverage - we offer several programs to support your mental health and wellness goals.</li>\n</ul>\n<ul>\n<li>3 weeks paid vacation; paid holidays; we expect you to work hard, but still enjoy your personal life</li>\n</ul>\n<ul>\n<li>7  weeks of baby bonding time for all new parents (within the first year of birth or adoption), 8 Weeks of Paid Pregnancy Leave.</li>\n</ul>\n<ul>\n<li>401(k) Matching</li>\n</ul>\n<ul>\n<li>Employer-contributing student loan assistance program.</li>\n</ul>\n<ul>\n<li>Commuter benefits (including Uber Pool).</li>\n</ul>\n<ul>\n<li>Employee Stock Incentive Plan.</li>\n</ul>\n<ul>\n<li>Pet insurance for your fur babies</li>\n</ul>\n<ul>\n<li>Quarterly Industry Speakers Series.</li>\n</ul>\n<ul>\n<li>Quarterly Tech Events (Women, LGBTQ, Diversity, Inclusion).</li>\n</ul>\n<ul>\n<li>Consistent &amp; fair leadership: we’ll share info, set clear goals, show you respect, and treat everyone fairly.</li>\n</ul>\n<ul>\n<li>Enough freedom to spread your wings while still holding you accountable.</li>\n</ul>\n<ul>\n<li>Fully stocked kitchen and cold brew on tap.</li>\n</ul>\n<p><span style="">ChowNow takes the health and safety of our team seriously and requires all employees to be fully vaccinated for COVID-19 prior to starting work.   We strongly believe that this is the best way to protect our employees, families, clients, and communities. All requests for accommodations will be considered.</span></p>\n<p> </p>\n<p>As one of ChowNow’s core values, “Celebrates Diversity”, we are committed to an inclusive and diverse work environment. ChowNow is an equal opportunity employer. We do not discriminate based on race, color, ethnicity, ancestry, national origin, religion, sex, gender, gender identity, gender expression, sexual orientation, age, disability, veteran status, genetic information, marital status or any legally protected status.</p>\n<p> </p>\n<p>Read <a class="postings-link" href="https://get.chownow.com/california-consumer-privacy-act/" rel="nofollow">here</a> about your California privacy rights.</p>\n<p> </p>\n<p>#Li-Remote</p>\n',
    },
  ],
};

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
  const [limit, setLimit] = useState<number>(50);
  const [value] = useDebounce(query, 400);

  useEffect(() => {
    getJobs();
  }, [sort, category, value]);

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

  const getJobs = async () => {
    try {
      const { data } = await getJobsList(query, sort, category, limit);
      console.log(data);
      setjobCount(data?.["job-count"]);
      setJobs(data.jobs);
    } catch (error) {
      let msg = (error as Error).message;
      console.log(msg);
    }
  };

  console.log(query);

  return (
    <Layout>
      <Header>Header</Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="App">
          <SearchInput
            onTextChange={onTextChange}
            text="Search For the jib syou want"
          />
          <div>
            <Filter options={categoryData} onSelect={onCategorySelect} />
          </div>
          <SearchResultHeader matches={jobCount} onSelect={onSortSelect} />
          <div
            style={{
              height: "100vh",
              overflow: "scroll",
            }}
          >
            <Space direction="vertical" size={25}>
              {jobs?.map((job) => (
                <SearchResultCard jobData={job} />
              ))}
            </Space>
          </div>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
