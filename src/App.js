// App.js
import React, { useState } from 'react';
import StarRating from './components/StarRating';
import './css/style.css'

function App() {
  const [isRatingVisible, setIsRatingVisible] = useState(true);

  return (
    <div>
      {isRatingVisible && <StarRating />}
      <button onClick={() => setIsRatingVisible(!isRatingVisible)}>
        {isRatingVisible ? 'Hide Rating' : 'Show Rating'}
      </button>
    </div>
  );
}

export default App;