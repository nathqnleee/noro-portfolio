import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Initial bucket list items for each category
const initialBucketLists = {
  Adventure: [
    { id: 1, text: 'Go skydiving', completed: false },
    { id: 2, text: 'Visit Calgary together', completed: false },
    { id: 3, text: 'Explore Asia Together', completed: false },
    { id: 4, text: 'Spontaneous Road Trip', completed: false },
    { id: 5, text: 'Go on a Hot Air Balloon Ride', completed: false },
  ],
  Dates: [
    { id: 1, text: 'Get a Couples Massage', completed: false },
    { id: 2, text: 'Stargaze on a Rooftop', completed: false },
    { id: 3, text: 'Picnic Date', completed: false },
    { id: 4, text: 'Camping Date', completed: false },
    { id: 5, text: 'Drive-In Movie Date', completed: false },
  ],
  Random: [
    { id: 1, text: 'Plan Our Future', completed: false },
    { id: 2, text: 'Write Each Other a Love Letter', completed: false },
    { id: 3, text: 'Create a Couples Spotify Playlist', completed: false },
    { id: 4, text: 'Move In Together', completed: false },
    { id: 5, text: 'Start a New Hobby Together', completed: false },
  ],
};

function TextButtonsPage() {
  const [activeCategory, setActiveCategory] = useState('');
  const [lists, setLists] = useState(initialBucketLists);

  // Function to handle checking off an item
  const handleCheck = (category, id) => {
    const newList = lists[category].map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setLists({ ...lists, [category]: newList });
  };

  return (
    <div className="container">
      <Link to="/" className="home-button">Home</Link>
      <h2>Choose a Bucket List 🤗:</h2>
      <div className="buttons-container">
        {Object.keys(initialBucketLists).map((category) => (
          <button
            key={category}
            className="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <ul>
          {lists[activeCategory].map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheck(activeCategory, item.id)}
              />
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TextButtonsPage;
