import React from 'react';
import Movie, { MovieType } from './movie';
import Pagination from './Pagination';

interface MovieListProp {
  movies: MovieType[];
  addToFav: (movie: MovieType) => void;
  total: number;
  changePage: (page: number) => void;
  page: number;
}

const MovieList = ({
  movies,
  addToFav,
  total,
  changePage,
  page,
}: MovieListProp) => {
  return (
    <React.Fragment>
      <div className="movie-list-container">
        {movies.length ? (
          movies.map((movie: MovieType) => (
            <Movie key={movie.imdbID} movie={movie} addToFav={addToFav} />
          ))
        ) : (
          <div>Movie List Empty, Search Your Movie</div>
        )}
      </div>
      {/* <Pagination page={page} changePage={changePage} total={total} /> */}
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
