import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SlideshowPage from './Slideshowpage';
import TimerPage from './TimerPage';
import loveYouGif from './love-heart.gif';
import './App.css'; // Ensure this import is correct
import TextButtonsPage from './TextButtonsPage'; // Import the new page


function HomePage() {
  return (
    <div className="container">
      <h1>Happy Valentines Day 🥰</h1>
      <img src={loveYouGif} alt="Welcome" className="gif-image" />
      <div className="buttons-container"> {/* Wrapper for buttons */}
        <Link to="/timer" className="button">Love Timer</Link>
        <Link to="/slideshow" className="button">Slideshow</Link>
        <Link to="/text-buttons" className="button">Bucketlist</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slideshow" element={<SlideshowPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/text-buttons" element={<TextButtonsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;