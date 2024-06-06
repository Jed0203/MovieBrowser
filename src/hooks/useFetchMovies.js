import { useState, useEffect } from "react";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
  
    useEffect(() => {
      async function fetchMoviesData() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIyMTQxMjU2ZjJiNThhMDFkMWI2MmMwMjQ3YTI1YyIsInN1YiI6IjY2NWNlODJhMTNjYTU2MGE0YWM4ZWE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YU0TJzwmpsYAvaIma6bt9wmB6NlZvgKTg7utnblW1tU",
          },
        };
  
        const response = await fetch(url, options);
        const data = await response.json();
        setTotalPages(data.total_pages);
        return data.results;
      }
  
      async function getMovies() {
        setIsLoading(true);
        const moviesData = await fetchMoviesData();
        const moviesWithKeys = moviesData.map((movie, index) => ({ ...movie, key: `${movie.id}-${index}` }));
        setMovies((prevMovies) => [...prevMovies, ...moviesWithKeys]);
        setIsLoading(false);
      }
  
      getMovies();
    }, [page]);
  
    const fetchMoreMovies = (direction) => {
        if (direction === 'next' && page < totalPages) {
          setPage((prevPage) => prevPage + 1);
        } else if (direction === 'previous' && page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      };
  
    return { movies, isLoading, fetchMoreMovies, page, totalPages };
  };

export default useFetchMovies;