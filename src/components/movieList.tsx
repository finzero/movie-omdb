import React from 'react';
import Movie, { MovieType } from './movie';

interface MovieListProp {
  movies: MovieType[];
  addToFav: (movie: MovieType) => void;
  total: string | undefined;
  changePage: (page: number) => void;
  page: number;
}

interface PaginationProp {
  total: string | undefined;
  changePage: (page: number) => void;
  page: number;
}
const Pagination = ({ page, changePage, total }: PaginationProp) => {
  const totalPage = Math.ceil(Number(total) / 10);

  return (
    <div className="pagination-container">
      {[...Array(totalPage)].map((_, i) => (
        <div
          onClick={() => changePage(i + 1)}
          className={i + 1 === page ? 'active' : ''}
          key={i}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

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
      <Pagination page={page} changePage={changePage} total={total} />
    </React.Fragment>
  );
};

MovieList.propTypes = {};

export default React.memo(MovieList);
