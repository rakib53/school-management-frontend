import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "school-management",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),

  endpoints: (builder) => ({}),
});

export default apiSlice;
