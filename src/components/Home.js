import { useEffect, useState } from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  // const detailUrl = `/movies/${movie.id}`
  useEffect(() => {
    async function getMovies(){
      const data = await fetchMoviesData();
      setMovies(data.results);
    }

    getMovies();
  }, []);

  async function fetchMoviesData(){
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIyMTQxMjU2ZjJiNThhMDFkMWI2MmMwMjQ3YTI1YyIsInN1YiI6IjY2NWNlODJhMTNjYTU2MGE0YWM4ZWE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YU0TJzwmpsYAvaIma6bt9wmB6NlZvgKTg7utnblW1tU'
      }
    };

    const response= await fetch(url, options);
    const json = await response.json();
    return json;
  }
  return (
    <>
      <Hero text="Now Playing..." />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies && movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              posterUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage}
              detailUrl={`/movies/${movie.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
