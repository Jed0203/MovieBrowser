//import { useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Trending = ({movies, isLoading, fetchMoreMovies, page, totalPages}) => {

  
  //const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  // Calculate the range of movies to display
  const moviesPerPage = 8;
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  
  return (
    <>
      <Hero text="Trending" />
      <div className="bg-dark">
        <div className="row row-cols-1 row-cols-md-3 ms-5">
          {currentMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            fetchMoreMovies = {fetchMoreMovies}
          />
        )}
      </div>
    </>
  );
};

export default Trending;
