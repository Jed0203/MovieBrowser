import Hero from "./Hero";
import MovieCard from './MovieCard';
import Pagination from "./Pagination";


const SearchView = ({ keyword, searchResults, fetchMoreMovies, page, totalPages, isLoading }) => {

  const moviesPerPage = 8;
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = searchResults.slice(startIndex, endIndex);
  
  const title = `You are searching for ${keyword}`
  const noResult = `No results found for ${keyword}`

  // const resultsHtml = 
  //   searchResults.length > 0 ? (
  //     searchResults.map((obj, i) => {
  //       return <MovieCard movie={obj} key={i} />
  //     })
  //   ) : (
  //     <div className="col-12">
  //       <h2>{noResult}</h2>
  //     </div>
  //   );
  
  

  return (
    <>
      <Hero text={title} />
      <div className=" bg-dark">
        <div className="row row-cols-1 row-cols-md-3 ms-5">
          {currentMovies.length > 0 ? (
            currentMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="col-12">
              <h2>{noResult}</h2>
            </div>
          )}
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            fetchMoreMovies = {fetchMoreMovies}
          />
        )}
      </div>
    </>
  );
};

export default SearchView;
