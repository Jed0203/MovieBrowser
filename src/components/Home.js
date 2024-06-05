//import { useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";

const Home = ({movies, isLoading, fetchMoreMovies}) => {
  
  
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

  
  return (
    <>
      <Hero text="Now Playing..." />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              posterUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage}
              detailUrl={`/movies/${movie.id}`}
            />
          ))}
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button className="btn btn-primary btn-lg col-lg-12 col-md-6 col-sm-12" onClick={fetchMoreMovies}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Home;
