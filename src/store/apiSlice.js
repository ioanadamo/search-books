import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: (query) => `search.json?q=${query}`,
    }),
  }),
});

export const { useSearchBooksQuery } = apiSlice;
