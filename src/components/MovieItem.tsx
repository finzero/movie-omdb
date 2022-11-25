import PropTypes from 'prop-types';
import styled from 'styled-components';

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
}

const MovieLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FavoriteMark = styled.div`
  position: absolute;
  right: -17px;
  top: -17px;
  width: 100px;
  height: 100px;
  background: rgb(0, 0, 0);
  -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
`;

const Star = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  color: orange;
  font-size: 30px;
`;

const PosterContainer = styled.div`
  width: 280px;
  height: 420px;
  overflow: hidden;
`;

const PosterImage = styled.img`
  width: 100%;
`;

const MovieInformation = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  background: black;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 5px;
`;

export default function MovieItem({ movie }: MoviePropType) {
  return (
    <div className="card" key={movie.imdbID}>
      <div className="card-body">
        <MovieLayout>
          <FavoriteMark>
            <Star>&#9733;</Star>
          </FavoriteMark>
          <PosterContainer>
            {movie.Poster !== 'N/A' ? (
              <PosterImage src={movie.Poster} alt={movie.Title} />
            ) : (
              <PosterImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQk5myChutYz0rHuGWaDlhcGMzOCABLt_LA&usqp=CAU"
                alt=""
              />
            )}
          </PosterContainer>
          <MovieInformation>
            {movie.Title} ({movie.Year})
          </MovieInformation>
        </MovieLayout>
      </div>
    </div>
  );
}
