import { Link } from 'react-router-dom';
//import { useParams} from "react-router-dom";

const MovieCard = ({ movie }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage;
  const detailUrl = `/movies/${movie.id}`


  return (  
      <div className="col-lg-3 col-md-3 col-2 mb-4 ">
        <div className="movie-card shadow-lg">
        <Link to={{ pathname: detailUrl, state: { posterUrl, placeholderImage } }}>
          <img src={posterUrl} className="card-img-top" alt={movie.original_title || 'No image available'} />
        </Link>
        <div className="movie-card-body">
          <h5 className="movie-card-title">
            <Link to={{ pathname: detailUrl, state: { posterUrl, placeholderImage } }} className="text-white">
              {movie.original_title}
            </Link>
          </h5>
          <p className="movie-card-release_date text-secondary">{movie.release_date}</p>
          <div className="text-white">{movie.vote_average}</div>{" "}
          
        </div>
      </div>
      </div>
    
  )
}

export default MovieCard;