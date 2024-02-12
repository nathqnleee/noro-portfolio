import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function TimerPage() {
  const [elapsedTime, setElapsedTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('April 2, 2023 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - targetDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setElapsedTime({ days, hours, minutes, seconds });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
    <Link to="/" className="home-button">Home</Link> {/* Home button */}
      <h1>Time Elapsed Since April 2, 2023</h1>
      <div className="timer">
        <span>{elapsedTime.days} days </span>
        <span>{elapsedTime.hours} hours </span>
        <span>{elapsedTime.minutes} minutes </span>
        <span>{elapsedTime.seconds} seconds</span>
      </div>
    </div>
  );
}

export default TimerPage;