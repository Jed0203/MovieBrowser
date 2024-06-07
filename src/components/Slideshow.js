import React from 'react';


const Slideshow = ({ movies }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, index) => {
          const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage;
          return (
            <div key={`${movie.id}-${index}`} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={posterUrl}
                className="d-block w-100 custom-carousel-img"
                alt={movie.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{movie.title}</h5>
                <p>{movie.overview}</p>
              </div>
            </div>
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


