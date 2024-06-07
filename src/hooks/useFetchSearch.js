import { useState, useEffect } from 'react';

const API_KEY = 'ab166ff82684910ae3565621aea04d62';

const useSearch = (keyword, page) => {
  const [searchResults, setSearchResults] = useState([]);
  const [totalSearchPages, setTotalSearchPages] = useState(0);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`);
        const data = await response.json();
        setSearchResults(data.results);
        setTotalSearchPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (keyword) {
      fetchSearchResults();
    }
  }, [keyword, page]);

  return { searchResults, totalSearchPages };
};

export default useSearch;
