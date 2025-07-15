import React from 'react';
import { useSubscription } from './SubscriptionContext';
import { useNavigate } from 'react-router-dom';

const Subscription = () => {
  const { isSubscriber, setIsSubscriber } = useSubscription();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    setIsSubscriber(true);
    alert('Thank you for subscribing!');
    navigate('/categories');
  };

  return (
    <div className="subscription-container">
      <h1>Subscription</h1>
      <p>{isSubscriber ? "You're already a subscriber!" : "Subscribe to unlock all categories."}</p>
      
      {!isSubscriber && (
        <button onClick={handleSubscribe} className="subscribe-btn">
          Subscribe Now
        </button>
      )}
    </div>
  );
};

export default Subscription;

