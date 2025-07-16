import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages css/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    country: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Registering user, please wait...');

    try {
      const response = await fetch('https://pjvhyb29se.execute-api.us-east-1.amazonaws.com/dev/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
          country: formData.country
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`✅ User registered successfully! ID: ${data.userId}`);
        setFormData({
          name: '',
          email: '',
          password: '',
          age: '',
          country: ''
        });
      } else {
        const errorData = await response.json();
        setMessage(`❌ Error: ${errorData.message || 'Registration failed.'}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate('/welcome');
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Region</option>
          <option value="South Africa">South Africa</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
        </select>

        <div className='sign-up-buttons'>
          <button type="button" onClick={goBack}>Back</button>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>

      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default SignUp;
