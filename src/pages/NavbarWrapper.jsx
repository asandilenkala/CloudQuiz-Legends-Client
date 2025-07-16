import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarWrapper = () => {
  const location = useLocation();
  const hiddenPaths = ['/welcome', '/sign-in', '/sign-up'];
  if (hiddenPaths.includes(location.pathname)) return null;
  return <Navbar />;
};

export default NavbarWrapper;
