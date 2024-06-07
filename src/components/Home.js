import React from 'react';
import Hero from './Hero';
// import SearchBar from './SearchBar';
import Slideshow from './Slideshow';

const Home = ({movies}) => {

  return (
    <div className="home-page">
      <Hero text="Welcome to Movie Browser" />
      {/* <div className="search-bar-container">
        <SearchBar setSearchText={setSearchText} handleSearch={handleSearch} />
      </div> */}
      <div className="slideshow-container mt-4">
        <Slideshow movies={movies} />
      </div>
    </div>
  );
};

export default Home;
