import Hero from "./Hero";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const location = useLocation();
  const { posterUrl, placeholderImage } = location.state || {};
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // window.scrollTo(0, 0); // Scroll to the top when the component mounts
    // setIsLoading(true); // Set loading state to true when fetching movie details

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      //const posterPath = passedPosterUrl || placeholderImage;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} isMovieViewPage={true}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3 shadow-lg ">
                <img
                  src={posterUrl || placeholderImage}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <div className="mt-4">
                  <span className="text-secondary">Genres:</span>
                  <ul className="list-group list-group-horizontal">
                    {movieDetails.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="list-group-item bg-light mx-1 rounded px-3 py-1 text-sm font-semibold "
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="text-secondary">Runtime:</span>{" "}
                  {movieDetails?.runtime} minutes
                </div>
                <div className="mt-4">
                  <span className="text-secondary">Average Rating:</span>{" "}
                  {movieDetails?.vote_average}
                </div>
                <div className="mt-4">
                  <span className="text-secondary">Revenue:</span> $
                  {movieDetails?.revenue?.toLocaleString()}
                </div>
                <div className="mt-4">
                  <span className="text-secondary">
                    Production Companies:
                  </span>{" "}
                  {movieDetails?.production_companies
                    ?.map((company) => company?.name)
                    .join(", ")}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
