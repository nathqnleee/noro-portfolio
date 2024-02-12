import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SlideshowPage from './Slideshowpage';
import loveYouGif from './love-you.gif';
import './App.css'; // Ensure this import is correct

function HomePage() {
  return (
    <div className="container">
      <h1>Happy Valentines Day Love!</h1>
      <img src={loveYouGif} alt="Welcome" className="gif-image" />
      <Link to="/slideshow" className="button">Go to Slideshow</Link> {/* Apply the button class */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slideshow" element={<SlideshowPage />} />
      </Routes>
    </Router>
  );
}

export default App;