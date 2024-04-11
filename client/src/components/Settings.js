import React, { useState } from 'react';
import Theme from './Theme'; // Import the new component

function Settings({ mapTheme, setMapTheme }) {
  const lightTheme = 'mapbox://styles/mapbox/streets-v12';
  const darkTheme = 'mapbox://styles/mapbox/dark-v11';

  const [currentTheme, setCurrentTheme] = useState(mapTheme || darkTheme);

  const handleThemeToggle = () => {
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
    setCurrentTheme(newTheme);
    setMapTheme(newTheme);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white dark:bg-purple rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Settings</h2>
      <Theme
        currentTheme={currentTheme}
        darkTheme={darkTheme}
        handleThemeToggle={handleThemeToggle}
      />
    </div>
  );
}

export default Settings;
