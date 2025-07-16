import React, { useState } from 'react';
import '../pages css/Profile.css'; // Make sure this CSS file exists

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Asandile Nkala',
    email: 'asandile@example.com',
    age: 25,
    image: null,
    imagePreview: '/default-profile.png'  // New default profile image
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
    // Send this data to your backend if needed
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-image-section">
        <img src={profileData.imagePreview} alt="Profile" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="age"
          value={profileData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
