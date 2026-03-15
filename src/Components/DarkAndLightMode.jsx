import React, { useEffect, useState } from 'react';
import { DarkMode } from '@mui/icons-material';

const DarkAndLightMode = () => {
  const [theme, setTheme] = useState('light_mode');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]); 
  
  const changeTheme = () => {
    setTheme(theme === 'dark_mode' ? 'light_mode' : 'dark_mode');
  };
  
  return (
    <div>
      <button className='darkAndLightBtn' onClick={changeTheme}> 
        <DarkMode />
      </button>
    </div>
  );
};

export default DarkAndLightMode;