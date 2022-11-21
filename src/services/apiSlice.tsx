import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'aec702d3';
interface SearchMovieParam {
  p: number;
  s?: string;
  y?: number | string | undefined;
}

interface SearchResponse {
  Response: string;
  Error: string | null | undefined;
  Search?: any[];
  totalResults?: string;
}

interface Response {
  status: string;
  message: string | undefined | null;
  data: any[];
  totalResults: string | undefined;
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://www.omdbapi.com',
  }),
  endpoints: (builder) => ({
    searchByTitle: builder.query({
      query: (param: { title: string; year: number }) => ({
        url: '',
        params: { apiKey: API_KEY, t: param.title, y: param.year },
      }),
    }),
    searchMovie: builder.query({
      query: ({ s, y, p }: SearchMovieParam) => ({
        url: '',
        params: { apiKey: API_KEY, s, y, page: p },
      }),
      transformResponse: ({
        Response,
        Error,
        Search,
        totalResults,
      }: SearchResponse) => {
        let response: Response = {
          status: Response === 'False' ? 'error' : 'success',
          message: Response === 'False' ? Error : '',
          data: Search || [],
          totalResults: totalResults,
        };
        return response;
      },
    }),
    searchByYear: builder.query({
      query: (year: number) => ({
        url: '',
        params: { apiKey: API_KEY, y: year },
      }),
    }),
  }),
});

export const {
  useLazySearchByTitleQuery,
  useSearchMovieQuery,
  useSearchByYearQuery,
  useLazySearchMovieQuery,
  useLazySearchByYearQuery,
} = moviesApi;
