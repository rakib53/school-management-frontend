import apiSlice from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAssignment: builder.mutation({
      query: (data) => {
        return {
          url: "createAssignment",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateAssignmentMutation } = authApi;
