import React, { useState } from 'react';
import '../pages css/Profile.css'; // Create this CSS file

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Asandile Nkala',
    email: 'asandile@example.com',
    age: 25,
    region: 'South Africa',
    image: null,
    imagePreview: '/default-avatar.png' // You can place a default image in /public
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', profileData);
    alert('Profile updated successfully!');
    // You can now send this data to your backend
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-image-section">
        <img src={profileData.imagePreview} alt="Profile" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" required />
        <input type="number" name="age" value={profileData.age} onChange={handleChange} placeholder="Age" required />
        <select name="region" value={profileData.region} onChange={handleChange}>
          <option value="">Select Region</option>
          <option value="South Africa">South Africa</option>
          <option value="Kenya">Kenya</option>
          <option value="Nigeria">Nigeria</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
        </select>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
