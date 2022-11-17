import React, { useState } from 'react';
import Movie, { MovieType, MoviePropType } from './movie';

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

  const pageBtnStyle = (p: number): React.CSSProperties => {
    let style: React.CSSProperties = {
      color: 'red',
      height: '50px',
      width: '50px',
      border: '1px solid red',
      backgroundColor: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
    };
    if (p === page) {
      style = {
        ...style,
        backgroundColor: 'red',
        color: 'white',
      };
    }
    return style;
  };

  return (
    <div className="pagination-container">
      {[...Array(totalPage)].map((_, i) => (
        <div
          onClick={() => changePage(i + 1)}
          style={pageBtnStyle(i + 1)}
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
