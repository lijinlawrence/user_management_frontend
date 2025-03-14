import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Home, Settings, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <div className={`fixed left-0 top-0 h-full w-64 p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} shadow-lg z-30 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Users size={24} className="text-blue-600" />
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="space-y-2">
          {/* <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : `hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`
              }`
            }
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink> */}
          
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : `hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`
              }`
            }
            onClick={() => window.innerWidth < 768 && toggleSidebar()}
          >
            <Users size={20} />
            <span>Users</span>
          </NavLink>
          
          {/* <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : `hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800' : ''}`
              }`
            }
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink> */}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;