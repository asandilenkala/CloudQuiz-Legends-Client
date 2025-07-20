import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages css/SignInForm.css';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value // Removed .trim()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Submitting login with:', formData);

    try {
      const response = await fetch(
        'https://pjvhyb29se.execute-api.us-east-1.amazonaws.com/dev/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      // Parse the 'body' field from API Gateway response
      let parsedBody = data;
      if (data.body) {
        try {
          parsedBody = JSON.parse(data.body);
        } catch (err) {
          console.error('Failed to parse response body:', err);
          setError('Server returned invalid response.');
          setLoading(false);
          return;
        }
      }

      console.log('Parsed backend body:', parsedBody);

      if (response.ok) {
        // Your backend consistently returns 'user' in the parsedBody for successful logins
        // so this check is correct for the current backend logic.
        if (!parsedBody.user) {
          setError('User data not found in response, despite successful status.');
          console.error('Login failed: User object not found in parsed backend response.');
          setLoading(false);
          return;
        }

        // Successful login
        localStorage.setItem('user', JSON.stringify(parsedBody.user));
        navigate('/home');
      } else {
        setError(parsedBody.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="current-password"
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging In...' : 'Log In'}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
