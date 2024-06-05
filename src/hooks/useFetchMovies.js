import { useState, useEffect } from "react";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
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
        return data.results;
      }
  
      async function getMovies() {
        setIsLoading(true);
        const moviesData = await fetchMoviesData();
        setMovies((prevMovies) => [...prevMovies, ...moviesData]);
        setIsLoading(false);
      }
  
      getMovies();
    }, [page]);
  
    const fetchMoreMovies = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    return { movies, isLoading, fetchMoreMovies };
  };

export default useFetchMovies;