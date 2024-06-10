import React, { useState } from 'react';
import RecommendationMovieCard from './RecommendationMovieCard';

const RecommendationCarousel = ({ recommendations }) => {
    const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 5 < recommendations.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
      setStartIndex(startIndex - 1);
  };

  return (
    <div className="rec_carousel-container">
      <button onClick={handlePrev} className="rec-carousel-control-prev" disabled={startIndex === 0}>
        &lt;
      </button>
      <div className="rec_carousel">
        {recommendations.slice(startIndex, startIndex + 5).map((recMovie) => (
          <RecommendationMovieCard key={recMovie.id} movie={recMovie} />
        ))}
      </div>
      <button onClick={handleNext} className="rec-carousel-control-next" disabled={startIndex + 5 >= recommendations.length}>
        &gt;
      </button>
    </div>
  );
};

export default RecommendationCarousel ;
