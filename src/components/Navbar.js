import { useHistory, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ setSearchText, onSearch }) => {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputValue);
    onSearch(inputValue);
    history.push('/search');
  }

  const handleHomeClick = () => {
    setInputValue(''); // Reset search input value
    history.push('/');
  };


  return (
    <nav className="navbar navbar-expand-lg bg-pink">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleHomeClick}>
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/trending" >
                Now Playing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Top_Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
