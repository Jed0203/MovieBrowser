import React from 'react';

const Pagination = ({ currentPage, totalPages, fetchMoreMovies}) => {
    return (
        <div className="pagination justify-content-center">
          <button
            className="btn btn-secondary py-2 me-2 mb-4"
            onClick={() => fetchMoreMovies('previous')}
            disabled={currentPage === 1}
            style={{ backgroundColor: 'transparent' }}
          >
            Previous
          </button>
          <span className="text-white rounded-circle py-2 px-1 me-2 bg-secondary mb-4">Page {currentPage}</span>
          <button
            className="btn btn-secondary py-2 me-2 mb-4"
            onClick={() => fetchMoreMovies('next')}
            disabled={currentPage === totalPages }
            style={{ backgroundColor: 'transparent' }}
          >
            Next
          </button>
        </div>
      );
    };
    
    export default Pagination;