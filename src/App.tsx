import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { add } from './features/movieSlice';
import { useDispatch } from 'react-redux';
import { useLazySearchMovieQuery } from './services/apiSlice';
import MovieList from './components/movieList';
import { MovieType } from './components/movie';
import rotateArrow from './assets/rotate-arrow-100.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

const EmptyState = () => (
  <div
    className="text-center text-info"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vzgBGWurwN5qXFRoWi92oND80HPCMroJOt1Esvb2J5ReTRpjTKVuKzb4yUv2CkBw5G4&usqp=CAU"
      alt=""
    />

    <div style={{ fontSize: '25px', marginTop: '10px' }}>
      No Movie, Search Your Movie Title
    </div>
  </div>
);

const Loading = () => (
  <div className="loading-container">
    <img src={rotateArrow} alt="loading" className="loading" /> <br />
    Fetching Your Movie(s), <br /> Please Wait...
  </div>
);

function App() {
  const [term, setTerm] = useState('');
  const [page, setPage] = useState(1);

  const movieSearch = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);

  const [fetchMovie, { isFetching, data: response, error }] =
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
      fetchMovie({ s: term, p: page });
    }
  }, [term, page]);

  const handleSearchByYear = (e: ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    if (term) {
      fetchMovie({ s: term, p: 1, y: year });
    }
  };

  return (
    <div className="container-fluid">
      <Header
        onSearchTitle={handleSearchByTitle}
        onSearchYear={handleSearchByYear}
      />

      <div className="movie-container">
        {isFetching && <Loading />}

        {!isFetching && response && response.status === 'success' && (
          <MovieList
            movies={response && response.data ? response.data : []}
            total={response.totalResults}
            addToFav={handleAddToFav}
            changePage={setPage}
            page={page}
          />
        )}

        {!isFetching && response && response.status === 'error' && (
          <EmptyState />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
