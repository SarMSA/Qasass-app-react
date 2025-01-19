import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className=" p-2 ms-4 rounded-full   text-zinc-darkZ dark:text-white z-50"
    >
      {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeToggle;