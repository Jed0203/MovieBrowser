import { useState, useEffect } from 'react';

const useFetchMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&append_to_response=videos,recommendations,`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        if (data.videos && data.videos.results) {
          const trailer = data.videos.results.find(vid => vid.name.toLowerCase().includes("trailer"));
          setTrailer(trailer );
        }
        setIsLoading(false);
        
      });
  }, [movieId]);

  return { movieDetails, isLoading, trailer};
};

export default useFetchMovieDetails;
