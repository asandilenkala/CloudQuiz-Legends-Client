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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Submitted:', formData);
    // Send formData to backend here
  };

  const goBack = () => {
      navigate('/welcome');
    }

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Region</option>
          <option value="South Africa">South Africa</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
        </select>

        <div className='sign-up-buttons'>
            <button onClick={goBack}>Back</button>
            <button type="submit">Register</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;
