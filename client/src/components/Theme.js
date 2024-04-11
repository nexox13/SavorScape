import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Theme = ({ currentTheme, darkTheme, handleThemeToggle }) => {
  const { colorTheme, setColorTheme } = useAppContext();

  const colors = [
    { name: 'blue', color: 'bg-blue-500', borderColor: 'black' },
    { name: 'red', color: 'bg-red-500', borderColor: 'black' },
    { name: 'green', color: 'bg-green-500', borderColor: 'black' },
    { name: 'yellow', color: 'bg-yellow-500', borderColor: 'black' },
    { name: 'purple', color: 'bg-purple', borderColor: 'black' }
  ];

  const changeTheme = (color) => {
    setColorTheme(color);
  };

  return (
    <div className={`${colorTheme} rounded-lg shadow-md p-4`}>
      <div className="flex items-center justify-center min-h-16">
        <label htmlFor="themeToggle" className="flex justify-around cursor-pointer">
          <div className="flex items-center space-x-2">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>

            <input
              type="checkbox"
              id="themeToggle"
              className="sr-only peer"
              checked={currentTheme === darkTheme}
              onChange={handleThemeToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>

            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"></path>
            </svg>
          </div>
        </label>
      </div>

      <div className="mt-4 flex justify-around bg-white rounded-lg shadow px-4 py-2">
        {colors.map(({ name, color, borderColor }) => (
          <button
            key={name}
            className={`rounded-lg w-8 h-8 border-2 ${color} border-${borderColor}`}
            onClick={() => changeTheme(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default Theme;
