import apiClient from "./axios";
import axios from "axios";

export const getJobsList = (
  query?: string | null,
  sort?: string | null,
  filter?: string | null,
  limit?: number | null,
  source?: any
) => {
  const resp = apiClient.get(
    ``,

    {
      params: {
        search: query ? query : null,
        category: filter ? filter : null,
        limit: limit ? limit : null,
        sort: sort ? sort : null,
      },
      cancelToken: source.token,
    }
  );
  return resp;
};
