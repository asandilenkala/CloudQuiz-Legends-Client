// Pages/Score.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import '../pages css/Score.css';

const Score = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize(); // For confetti

  if (!state) {
    return <p>No score available. Try a quiz first.</p>;
  }

  const { score, total, category } = state;
  const percentage = Math.round((score / total) * 100);

  let message = '';
  if (percentage < 50) {
    message = "Keep improving. You can try again!";
  } else if (percentage < 80) {
    message = "Well done! Keep it up.";
  } else {
    message = "Excellent work! Congratulations!";
  }

  const handleRetry = () => {
    navigate('/quiz', { state: { category } });
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="score-container">
      {/* 🎉 Confetti Celebration for 80%+ */}
      {percentage >= 80 && <Confetti width={width} height={height} />}
      
      <h1>Quiz Results</h1>
      <p>You scored {score} out of {total}</p>
      <p>Percentage: {percentage}%</p>
      <h2>{message}</h2>

      <div className="score-buttons">
        <button onClick={handleRetry}>Try Again</button>
        <button onClick={handleGoHome}>Home</button>
      </div>
    </div>
  );
};

export default Score;

