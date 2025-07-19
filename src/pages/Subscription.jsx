const handleSubscribe = async () => {
  setIsSubscriber(true);
  alert('Thank you for subscribing!');

  try {
    await fetch('/api/send-subscription-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "user@example.com" }) // get user email from login context
    });
  } catch (err) {
    console.error('Failed to send subscription email:', err);
  }

  navigate('/categories');
};
