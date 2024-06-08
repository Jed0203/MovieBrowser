import React from 'react';
import { Link } from 'react-router-dom';


const Slideshow = ({ movies }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';


  return (
    <div id="carouselExampleAutoplaying" className="carousel slide custom-carousel" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, index) => {
          const posterUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholderImage;
          const detailUrl = `/movies/${movie.id}`
          return (
            <div key={`${movie.id}-${index}`} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img
                        src={posterUrl}
                        className="d-block w-100 custom-carousel-img"
                        alt={movie.title}
                    />

                        
                    <div className="carousel-caption position-absolute top-50 start-50 translate-middle fs-4">
                        <h5>{movie.title}</h5>
                        <p>{movie.overview}</p>
                        <Link to={detailUrl} className="btn btn-primary">
                            More Details
                        </Link>
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


