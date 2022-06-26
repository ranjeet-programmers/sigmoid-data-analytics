import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  baseUrl,
  GET_DATE_RANGE,
  GET_DATA,
  LOGIN_URL,
  POST,
} from "./urlConstants";
import { DATE_RANGE_PAYLOAD } from "./payloadConstants";

// Define a service using a base URL and expected endpoints
export const sigmoidApi = createApi({
  reducerPath: "sigmoidApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().login.token;
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN_URL,
        method: POST,
        body: credentials,
      }),
    }),
    getDateRange: builder.query({
      query: () => ({
        url: GET_DATE_RANGE,
        method: POST,
        body: DATE_RANGE_PAYLOAD,
      }),
      transformResponse: (response) => response.result,
    }),
    barChartData: builder.mutation({
      query: (barChartPayload) => ({
        url: GET_DATA,
        method: POST,
        body: barChartPayload,
      }),
      transformResponse: (response) => response.result?.data,
    }),
    pieChartData: builder.mutation({
      query: (pieChartPayload) => ({
        url: GET_DATA,
        method: POST,
        body: pieChartPayload,
      }),
      transformResponse: (response) => response.result?.data,
    }),
    tableChartData: builder.mutation({
      query: (tableChartPayload) => ({
        url: GET_DATA,
        method: POST,
        body: tableChartPayload,
      }),
      transformResponse: (response) => response.result?.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useGetDateRangeQuery,
  useBarChartDataMutation,
  usePieChartDataMutation,
  useTableChartDataMutation,
} = sigmoidApi;
