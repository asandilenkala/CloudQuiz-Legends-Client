import React from 'react';
import { Link} from 'react-router-dom';
import '../pages css/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/App Logo.png" className="navbar-logo" />
      <ul className="navbar-links">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/welcome'>Logout</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
