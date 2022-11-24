import React, { ChangeEvent, useEffect, useState } from 'react';
import { add } from './features/movieSlice';
import { useDispatch } from 'react-redux';
import { useLazySearchMovieQuery } from './services/apiSlice';
import MovieList from './components/MovieList';
import { MovieType } from './components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import EmptyState from './components/EmptyState';
import Loading from './components/Loading';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  padding-bottom: 50px;
  padding-top: 10px;
`;

function App() {
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);

  const [fetchMovie, { isFetching, data: response }] =
    useLazySearchMovieQuery();

  const dispatch = useDispatch();

  const handleAddToFav = (movie: MovieType) => {
    dispatch(add(movie));
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

  useEffect(() => {
    if (term) {
      fetchMovie({ s: term, p: page }).then(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [fetchMovie, term, page]);

  const handleSearchByYear = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    if (term) {
      fetchMovie({ s: term, p: 1, y: year });
    }
  };

  return (
    <React.Fragment>
      <Header
        onSearchTitle={handleSearchByTitle}
        onSearchYear={handleSearchByYear}
      />

      <Content>
        {!isFetching && response && response.status === 'success' && (
          <MovieList
            movies={response && response.data ? response.data : []}
            total={Number(response.totalResults)}
            addToFav={handleAddToFav}
            changePage={setPage}
            page={page}
          />
        )}

        {!isFetching && response && response.status === 'error' && (
          <EmptyState />
        )}

        {!isFetching && !response && <EmptyState />}
      </Content>

      {isFetching && (
        <Loading
          loadingText={'Fetching Your Movie(s), <br /> Please Wait...'}
        />
      )}

      <Footer />
    </React.Fragment>
  );
}

export default App;
