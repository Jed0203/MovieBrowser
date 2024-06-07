import Hero from "./Hero";
import { useParams, useLocation } from "react-router-dom";
//import { useEffect, useState } from "react";
import useFetchMovieDetails from "../hooks/useFetchMoviesDetail";

const MovieView = () => {
  const { id } = useParams();
  const location = useLocation();
  const { posterUrl, placeholderImage } = location.state || {};
  const { movieDetails, isLoading } = useFetchMovieDetails(id);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      //const posterPath = passedPosterUrl || placeholderImage;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <div className="movie-view-container" style={{ backgroundImage: `url(${backdropUrl})` }}>
            {/* <Hero text={movieDetails.original_title}/> */}
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3 shadow-lg">
                  <img
                    src={posterUrl || placeholderImage}
                    alt="..."
                    className="img-fluid shadow rounded"
                  />
                </div>
                <div className="col-md-9 text-white">
                  <h2>{movieDetails.original_title}</h2>
                  <p className="lead">{movieDetails.overview}</p>
                  <div className="mt-4">
                    <span className="text-white-50">Genres:</span>
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
                    <span className="text-white-50">Runtime:</span>{" "}
                    {movieDetails?.runtime} minutes
                  </div>
                  <div className="mt-4">
                    <span className="text-white-50">Average Rating:</span>{" "}
                    {movieDetails?.vote_average}
                  </div>
                  <div className="mt-4">
                    <span className="text-white-50">Revenue:</span> $
                    {movieDetails?.revenue?.toLocaleString()}
                  </div>
                  <div className="mt-4">
                    <span className="text-white-50">
                      Production Companies:
                    </span>{" "}
                    {movieDetails?.production_companies
                      ?.map((company) => company?.name)
                      .join(", ")}
                  </div>
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
