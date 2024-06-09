import React from 'react';
// import SearchBar from './SearchBar';
import Slideshow from './Slideshow';

const Home = ({movies}) => {

  return (
    <div className="home-page bg-dark">
      {
        movies && movies.length>0 && <Slideshow movies={movies} />
      }
      

    </div>
  );
};

export default Home;
