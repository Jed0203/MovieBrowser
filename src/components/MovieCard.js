import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
 const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage;
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title || 'No image available'} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={{pathname: detailUrl,
                    state: {posterUrl, placeholderImage}
          }} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;