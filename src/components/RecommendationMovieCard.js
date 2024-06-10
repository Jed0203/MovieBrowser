// RecommendationMovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecommendationMovieCard = ({ movie }) => {
  const { id, title, vote_average } = movie;
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage;
  const getBadgeColor = (rating) => {
    if (rating >= 7) {
      return 'bg-success';
    } else if (rating >= 6) {
      return 'bg-warning text-dark';
    } else {
      return 'bg-danger';
    }
  };

  return (
    <div className="recommendation-card px-2">
      <Link to={`/movies/${id}`}>
        <div>
          <img src={posterUrl} alt={title} />
          <div className={`rating ${getBadgeColor(movie.vote_average)}`}>{vote_average.toFixed(1)}</div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${movie.overview.substring(0, 60)}...`}</p>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationMovieCard;
