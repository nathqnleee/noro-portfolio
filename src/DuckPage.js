import React, { useState } from 'react';
import duckImage from './yellow-hair-chicken-if-we-cute-little-yellow-chicken.jpg';

function DuckPage() {
  const [isHappy, setIsHappy] = useState(false);

  const feedDuck = () => {
    setIsHappy(true);
    setTimeout(() => {
      setIsHappy(false); // Duck goes back to normal state after 2 seconds
    }, 2000);
  };

  return (
    <div className="duck-container">
      <img src={duckImage} alt="Duck" className={isHappy ? 'happy-duck' : ''} />
      <button onClick={feedDuck} className="feed-button">Feed</button>
      {isHappy && <p>The duck is happy!</p>}
    </div>
  );
}

export default DuckPage;