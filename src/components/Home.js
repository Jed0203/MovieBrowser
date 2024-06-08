import React from 'react';
import Hero from './Hero';
// import SearchBar from './SearchBar';
import Slideshow from './Slideshow';

const Home = ({movies}) => {

  return (
    <div className="home-page bg-dark">
      <Hero text="Welcome to Movie Browser" />
      {
        movies && movies.length>0 && <Slideshow movies={movies} />
      }
      

    </div>
  );
};

export default Home;
