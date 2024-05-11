// StarRating.js
import React, { useState } from 'react';
import Star from './Star'; // assuming Star.js is in the same directory

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <Star
            key={i}
            filled={ratingValue <= rating}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}
      
      <h2>
        {
          rating < 1 ? `Rate this` : 'Rate this' && 
          rating < 1 ? `Poor` : 'Poor' && 
          rating < 2 ? `Fair` : 'Fair' && 
          rating < 3 ? `Good` : 'Good' && 
          rating < 4 ? `Very good` : 'Very good' && 
          rating < 5 ? `Excellent` : 'Perfect'}
      </h2>
    </div>
  );
}

export default StarRating;