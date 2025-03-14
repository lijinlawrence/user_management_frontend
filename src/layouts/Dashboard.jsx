import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="pt-16 px-4 transition-all duration-300 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;