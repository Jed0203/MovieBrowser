import Hero from "./Hero";
import MovieCard from './MovieCard';


const SearchView = ({ keyword, searchResults }) => {
  
  const title = `You are searching for ${keyword}`
  const noResult = `No results found for ${keyword}`

  const resultsHtml = 
    searchResults.length > 0 ? (
      searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
      })
    ) : (
      <div className="col-12">
        <h2>{noResult}</h2>
      </div>
    );
  
  

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;
