//import { useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Home = ({movies, isLoading, fetchMoreMovies, page, totalPages}) => {
  
  
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  // Calculate the range of movies to display
  const moviesPerPage = 12;
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  
  return (
    <>
      <Hero text="Now Playing..." />
      <div className="bg-dark">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentMovies.map((movie) => (
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
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            fetchMoreMovies={fetchMoreMovies}
          />
        )}
      </div>
    </>
  );
};

export default Home;
