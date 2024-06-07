import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import useFetchMovies from "./hooks/useFetchMovies";
import Home from "./components/Home";

// const API_KEY = '1522141256f2b58a01d1b62c0247a25c'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [totalSearchPages, setTotalSearchPages] = useState(0);
  const {movies, isLoading, fetchMoreMovies, page, totalPages} = useFetchMovies();

  const handleSearch = (query) => {
    if (query) {
      const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchText}&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTIyMTQxMjU2ZjJiNThhMDFkMWI2MmMwMjQ3YTI1YyIsInN1YiI6IjY2NWNlODJhMTNjYTU2MGE0YWM4ZWE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YU0TJzwmpsYAvaIma6bt9wmB6NlZvgKTg7utnblW1tU'
        }
      };

      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
          setTotalSearchPages(data.total_pages);
          setSearchText(query);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  };

  

  return (
    <div>
      <Navbar setSearchText={setSearchText} onSearch={handleSearch}/>
      <Switch>
          <Route path="/" exact>
            <Home movies= {movies}/>
          </Route>
        <Route path="/trending" exact>
          <Trending movies={movies} isLoading={isLoading} fetchMoreMovies={fetchMoreMovies} page = {page} totalPages = {totalPages}/>
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} 
                      searchResults={searchResults} 
                      fetchMoreMovies={fetchMoreMovies} 
                      page = {page} 
                      totalPages = {totalSearchPages} 
                      movies={movies} 
                      isLoading={isLoading}/>
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
