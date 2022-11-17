import React, { MouseEventHandler } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export const moviePropTypes = {
  Title: PropTypes.string,
  Year: PropTypes.string,
  imdbID: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string,
};

export interface MovieType {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviePropType {
  movie: MovieType;
  addToFav: (movie: MovieType) => void;
}

// export type MovieType = InferProps<typeof moviePropTypes>;

export default function Movie({ movie, addToFav }: MoviePropType) {
  return (
    <div className="card movieContainer" key={movie.imdbID}>
      <div className="card-body">
        <div className="movie-layout">
          <div className="favorite-mark">
            <div className="star">&#9733;</div>
          </div>
          <div className="poster-container">
            {movie.Poster !== 'N/A' ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQk5myChutYz0rHuGWaDlhcGMzOCABLt_LA&usqp=CAU"
                alt=""
              />
            )}
          </div>
          <div className="movie-information">
            {movie.Title} ({movie.Year})
          </div>
        </div>
        <div className="hover-layout"></div>
        <button className="btn-hover btn btn-outline-info">View Detail</button>
      </div>
    </div>
  );
}

// Movie.propTypes = moviePropTypes;
