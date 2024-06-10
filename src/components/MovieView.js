import Hero from "./Hero";
import { useParams, useLocation } from "react-router-dom";
import {  useState } from "react";
import useFetchMovieDetails from "../hooks/useFetchMoviesDetail";
import ReactModal from "react-modal"; 
import Youtube from 'react-youtube';
import RecommendationCarousel from "./RecommendationCarousel";

ReactModal.setAppElement('#root');

const MovieView = () => {
  const { id } = useParams();
  const location = useLocation();
  const { placeholderImage } = location.state || {};
  const { movieDetails, isLoading, trailer } = useFetchMovieDetails(id);
  const votePercentage = Math.round(movieDetails.vote_average * 10);
  const [playing, setPlaying] = useState(false)
  const posterUrl = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : placeholderImage;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      return (
        <div className="movie-view-container" style={{ backgroundImage: `url(${backdropUrl})` }}>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3 shadow-lg position-relative poster-container">
                <img
                  src={posterUrl || placeholderImage}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
                {trailer && (
                  <button
                    className="button play-video"
                    onClick={() => setPlaying(true)}
                    type="button"
                  >
                    Play Trailer
                  </button>
                )}
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
                        className="list-group-item"
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="text-white-50">Runtime:</span> {movieDetails?.runtime} minutes
                </div>
                <div className="mt-4">
                  <span className="text-white-50">Average Rating:</span> {votePercentage}%
                </div>
                <div className="mt-4">
                  <span className="text-white-50">Revenue:</span> ${movieDetails?.revenue?.toLocaleString()}
                </div>
                <div className="mt-4">
                  <span className="text-white-50">Production Companies:</span> {movieDetails?.production_companies?.map((company) => company?.name).join(", ")}
                </div>
                
              </div>
              <div className="rec_carousel mt-4">
                    <RecommendationCarousel recommendations={movieDetails.recommendations.results} />
              </div>
            </div>
            
          </div>
          {playing && (
            <div className="trailer-overlay">
              <button type="button" onClick={() => setPlaying(false)} className="btn-close btn-close-white" aria-label="Close"></button>
              <Youtube
                videoId={trailer.key}
                className="youtube amru"
                containerClassName="youtube-container amru"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    cc_load_policy: 0,
                    fs: 1,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
            </div>
          )}
        </div>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
