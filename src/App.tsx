import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layout/Footer';
import Movie from './pages/Movie';

function App() {
  return (
    <React.Fragment>
      <Movie />
      <Footer />
    </React.Fragment>
  );
}

export default App;
