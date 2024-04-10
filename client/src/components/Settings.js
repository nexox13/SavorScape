import React, { useState } from 'react';

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
      <div className="flex items-center space-x-2">
        <label htmlFor="themeToggle" className="text-gray-700 dark:text-gray-200 cursor-pointer" onClick={(e) => e.preventDefault()}>
          Dark Mode:
        </label>
        <input
          type="checkbox"
          id="themeToggle"
          className="w-5 h-5"
          checked={currentTheme === darkTheme}
          onChange={handleThemeToggle}
        />
      </div>
    </div>
  );
}

export default Settings;
