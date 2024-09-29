import React, { useState } from 'react';
import '../Stylesheets/Toggle.css';
import '../Stylesheets/Root.css';

const Toggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
    if (!isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div id='Toggle'>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDarkTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;