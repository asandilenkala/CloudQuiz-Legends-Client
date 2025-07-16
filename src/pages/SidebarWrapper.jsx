import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const SidebarWrapper = () => {
  const location = useLocation();
  const hiddenPaths = ['/welcome', '/sign-in', '/sign-up'];
  if (hiddenPaths.includes(location.pathname)) return null;
  return <Sidebar />;
};

export default SidebarWrapper;
