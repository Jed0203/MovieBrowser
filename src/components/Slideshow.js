import React from 'react';
import { Link } from 'react-router-dom';


const Slideshow = ({ movies }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const getFirstWords = (text, wordCount) => {
    const words = text.split(' ');
    return words.length > wordCount ? `${words.slice(0, wordCount).join(' ')}...` : text;
  };



  return (
    <div id="carouselExampleAutoplaying" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, index) => {
          const posterUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholderImage;
          const detailUrl = `/movies/${movie.id}`
          const voteScore = Math.round(movie.vote_average);
          return (
            <Link to={detailUrl} key={`${movie.id}-${index}`} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  
              <img
                  src={posterUrl}
                  className=" custom-carousel-img"
                  alt={movie.title}
              />       
              <div className="carousel-caption-overlay">
                <div className="carousel-caption">
 
                  <h1 className="carousel-title">{movie.title}</h1>
                  <p className="carousel-subtitle">Release Date: {movie.release_date} | Rating: {voteScore}/10</p>
                  <p className="carousel-overview">{getFirstWords(movie.overview, 15)}</p>
                </div>
              </div>

            </Link>
          );
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slideshow;


