import axios from "axios";

const BaseURL = axios.create({
  baseURL: "https://remotive.io/api/remote-jobs?",
});

export default BaseURL;
