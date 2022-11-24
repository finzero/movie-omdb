import React from 'react';
import styled from 'styled-components';
import Movie, { MovieType } from './Movie';
import Pagination from './Pagination';

interface MovieListProp {
  movies: MovieType[];
  addToFav: (movie: MovieType) => void;
  total: number;
  changePage: (page: number) => void;
  page: number;
}

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  margin: auto;

  @media (min-width: 375px) {
    width: 314px;
  }

  @media (min-width: 768px) {
    width: calc(314px * 2 + 10px);
  }

  @media (min-width: 1024px) {
    width: calc(314px * 3 + 10px * 2);
  }

  @media (min-width: 1440px) {
    width: calc(314px * 4 + 10px * 3);
  }

  @media (min-width: 2000px) {
    width: calc(314px * 5 + 10px * 4);
  }
`;

const MovieList = ({
  movies,
  addToFav,
  total,
  changePage,
  page,
}: MovieListProp) => {
  return (
    <React.Fragment>
      <MovieListContainer>
        {movies.length ? (
          movies.map((movie: MovieType) => (
            <Movie key={movie.imdbID} movie={movie} addToFav={addToFav} />
          ))
        ) : (
          <div>Movie List Empty, Search Your Movie</div>
        )}
      </MovieListContainer>
      <Pagination
        className="pagination-bar"
        currentPage={page}
        totalCount={total}
        pageSize={10}
        onPageChange={(page: number) => changePage(page)}
      />
    </React.Fragment>
  );
};

MovieList.propTypes = {};

export default React.memo(MovieList);
