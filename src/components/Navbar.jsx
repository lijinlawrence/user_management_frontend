import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun, LogOut, Menu } from 'lucide-react';
import { toggleTheme } from '../store/slices/themeSlice';
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={`fixed top-0 right-0 h-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} shadow-sm flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${window.innerWidth > 768 ? 'left-64' : 'left-0'}`}>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
        >
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-semibold truncate">Welcome, {user?.name}</h2>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut size={20} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;