import React from 'react';
import MovieList from '../components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../layout/SearchBar';
import Footer from '../layout/Footer';
import EmptyState from '../components/EmptyState';
import Loading from '../components/Loading';
import styled from 'styled-components';
import useMovie from '../hook/useMovie';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  padding-bottom: 50px;
  margin-top: 80px;
`;

export default function Movie() {
  const { movie, page, search } = useMovie();

  return (
    <React.Fragment>
      <SearchBar
        onSearchTitle={search.handleSearchByTitle}
        onSearchYear={search.handleSearchByYear}
      />

      <Content>
        {!movie.isFetching && movie.data && movie.data.status === 'success' && (
          <MovieList
            movies={movie.data && movie.data.data ? movie.data.data : []}
            total={Number(movie.data.totalResults)}
            changePage={page.handlePageChange}
            page={page.currentPage}
          />
        )}

        {!movie.isFetching && movie.data && movie.data.status === 'error' && (
          <EmptyState />
        )}

        {!movie.isFetching && !movie.data && <EmptyState />}
      </Content>

      {movie.isFetching && (
        <Loading
          loadingText={'Fetching Your Movie(s), <br /> Please Wait...'}
        />
      )}

      <Footer />
    </React.Fragment>
  );
}
