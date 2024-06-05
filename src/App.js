import "./App.css";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import useFetchMovies from "./hooks/useFetchMovies";

//api_key = 1522141256f2b58a01d1b62c0247a25c

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const {movies, isLoading, fetchMoreMovies} = useFetchMovies();

  const handleSearch = (query) => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1522141256f2b58a01d1b62c0247a25c&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        });
    }
  };

  

  return (
    <div>
      <Navbar setSearchText={setSearchText} onSearch={handleSearch}/>
      <Switch>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="/" exact>
          <Home movies={movies} isLoading={isLoading} fetchMoreMovies={fetchMoreMovies}/>
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
