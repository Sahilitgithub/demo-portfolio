import React, { useEffect, useState } from 'react'
import {DarkMode, Nightlight} from '@mui/icons-material/';

const DarkAndLightMode = () => {
  let [theme, setTheme] = useState('light_mode');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]) 
  
  const changeTheme = () => {
    theme === 'dark_mode' ? setTheme('light_mode') : setTheme('dark_mode');
  }
  
  return (
    <div>
      <button className='darkAndLightBtn' onClick={() => changeTheme()}> 
      {<DarkMode/>}</button>
    </div>
  )
}

export default DarkAndLightMode;
