import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import questionsData from './Questions';
import '../pages css/Quiz.css';

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = location.state?.category || 'Education';

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);


  const questions = questionsData[selectedCategory] || [];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (timer > 0 && !showNext) {
      const countdown = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, showNext]);

  const handleAnswerClick = (option) => {
  if (selectedAnswer) return;
    setSelectedAnswer(option);
    setShowNext(true);
    const correct = option === currentQuestion.answer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
  };


  const handleNext = () => {
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setShowNext(false);
    setIsCorrect(null);
    setTimer(60);
  } else {
    navigate('/score', {
      state: {
        score,
        total: questions.length,
        category: selectedCategory
      }
    });
  }
};


  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="timer">Time left: {timer}s</div>

      <div className="question-card">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>

        <ul className="options-list">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isAnswerCorrect = currentQuestion.answer === option;

            let className = 'option';
            if (selectedAnswer) {
              if (isAnswerCorrect) className += ' correct';
              else if (isSelected && !isAnswerCorrect) className += ' wrong';
            }

            return (
              <li
                key={idx}
                className={className}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>

        {showNext && (
          <button className="next-btn" onClick={handleNext}>Next</button>
        )}

        <button className="home-btn" onClick={handleGoHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default Quiz;
