import React, { useState, useEffect } from 'react';
import { useLazySearchMovieQuery } from '../services/apiSlice';

interface IFetchParam {
  s: string;
  p: number;
  y: string;
}

const useMovie = () => {
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [fetch, { isFetching, data }] = useLazySearchMovieQuery();
  const fetchMovie = (param: IFetchParam) => {
    setTerm(param.s);
    setCurrentPage(param.p || 1);
    fetch(param);
  };

  let typingTimeout: NodeJS.Timeout;
  const typing = (type: string) => {
    clearTimeout(typingTimeout);
    return new Promise<string>((resolve) => {
      typingTimeout = setTimeout(() => resolve(type), 500);
    });
  };

  const handleSearchByTitle = (e: any) => {
    typing(e.target.value).then((searchParam: string) => {
      fetchMovie({ s: searchParam, y: '', p: 1 });
      setTerm(searchParam);
    });
  };

  const handleSearchByYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    if (term) {
      fetchMovie({ s: term, p: 1, y: year });
      setYear(year);
    }
  };

  const handlePageChange = (page: number) => {
    fetchMovie({ s: term, y: year, p: page });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [data]);

  const movie = { fetchMovie, isFetching, data };
  const page = { currentPage, handlePageChange };
  const search = { handleSearchByTitle, handleSearchByYear };
  return { movie, page, search };
};

export default useMovie;
