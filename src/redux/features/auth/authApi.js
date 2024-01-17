import apiSlice from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => {
        return {
          url: "registration",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        return {
          url: "login",
          method: "POST",
          body: data,
        };
      },
    }),
    getUserInfo: builder.query({
      query: () => "userInfo",
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useGetUserInfoQuery,
} = authApi;
