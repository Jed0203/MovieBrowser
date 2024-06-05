import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const MovieCard = ({ movie }) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
 const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage;
  const detailUrl = `/movies/${movie.id}`
  return (  
      <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
        <Link to={{ pathname: detailUrl, state: { posterUrl, placeholderImage } }}>
          <img src={posterUrl} className="card-img-top" alt={movie.original_title || 'No image available'} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <StyledLink to={{ pathname: detailUrl, state: { posterUrl, placeholderImage } }} className="text-dark">
              {movie.original_title}
            </StyledLink>
          </h5>
          <p className="card-release_date">{movie.release_date}</p>
        </div>
      </div>
      </div>
    
  )
}

export default MovieCard;