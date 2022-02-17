import axios from "./axios";

export const getJobsList = (
  query?: string | null,
  sort?: string | null,
  filter?: string | null,
  limit?: number | null
) => {
  const resp = axios.get(``, {
    params: {
      search: query ? query : null,
      category: filter ? filter : null,
      limit: limit ? limit : null,
      sort: sort ? sort : null,
    },
  });
  return resp;
};
