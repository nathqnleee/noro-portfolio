import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SlideshowPage from './Slideshowpage';
import TimerPage from './TimerPage';
import DuckPage from './DuckPage'; // Import DuckPage
import loveYouGif from './love-you.gif';
import './App.css'; // Ensure this import is correct

function HomePage() {
  return (
    <div className="container">
      <h1>Happy Valentines Day Love!</h1>
      <img src={loveYouGif} alt="Welcome" className="gif-image" />
      <Link to="/slideshow" className="button">Slideshow</Link> 
      <Link to="/timer" className="button">Timer</Link> 
      <Link to="/duck" className="button">Duck</Link> 
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
        <Route path="/duck" element={<DuckPage />} />
      </Routes>
    </Router>
  );
}

export default App;