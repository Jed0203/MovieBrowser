import React from 'react';

const Pagination = ({ currentPage, totalPages, fetchMoreMovies }) => {
    return (
        <div className="pagination">
          <button
            className="btn btn-secondary"
            onClick={() => fetchMoreMovies('previous')}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="text-white">Page {currentPage}</span>
          <button
            className="btn btn-secondary"
            onClick={() => fetchMoreMovies('next')}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      );
    };
    
    export default Pagination;