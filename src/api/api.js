import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getTopstories: builder.query({
      query: () => '/topstories.json?print=pretty',
    }),
    getItem: builder.query({
      query: item => `/item/${item}.json?print=pretty`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }]
    }),
  }),
})
export const { 
  useGetTopstoriesQuery,
  useGetItemQuery
 } = apiSlice

