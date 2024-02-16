import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SlideshowPage from './Slideshowpage';
import TimerPage from './TimerPage';
import TextButtonsPage from './TextButtonsPage';
import loveYouGif from './love-heart.gif';
import './App.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Happy Valentines Day 🥰</h1>
      <img src={loveYouGif} alt="Welcome" className="gif-image" />
      <div className="buttons-container">
        {/* Use Link for navigation */}
        <Link to="/timer" className="button">Love Timer</Link>
        <Link to="/slideshow" className="button">Slideshow</Link>
        <Link to="/text-buttons" className="button">Bucketlist</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/noro-portfolio"> {/* Add basename if deploying to GitHub Pages */}
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
