import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { colorTheme} = useAppContext();


  const handleFormSwitch = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your own logic to handle form submission
    // This example just clears the form for now
    setUsername('');
    setPassword('');
    setErrorMessage('');

    console.log('Submitted login form:', { username, password }); // Replace with your logic
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    // Implement your own logic to handle registration submission
    // This example just clears the form for now
    setUsername('');
    setPassword('');
    setErrorMessage('');

    console.log('Submitted registration form:', { username, password }); // Replace with your logic
  };

  return (
    <div>
      {/* Registration and Login */}
      <div className="container mx-auto mt-4 flex items-center">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          {showRegisterForm ? (
            <>
              <h1 className="flex justify-center font-mono text-xl">Register</h1>
              <form onSubmit={handleRegisterSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-username">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="register-username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="register-password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="register-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-black mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register
                  </button>
                  <a href="#" onClick={handleFormSwitch} className="text-sm text-blue-500 hover:underline">
                    Already have an account? Login here
                  </a>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="flex justify-center font-mono text-xl">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-username">
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="login-username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="login-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage && (
                  <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
                )}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-black mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Login
                  </button>
                  <a href="#" onClick={handleFormSwitch} className="text-sm text-blue-500 hover:underline">
                    New user? Register here
                  </a>
                </div>
              </form>
            </>
          )}
        </div>
      </div >
      
      <div className='bg-white mt-4 rounded-xl p-4'>
        <h1 className="font-mono text-xl font-bold">Unlock the Power of Your Account!</h1>

        <div className={`${colorTheme} rounded-lg shadow-md mt-4 p-2 font-mono text-lg text-green-700`}>
          <h2>Join the Culinary Adventure: Create and Share Your Own Recipes with the whole Community!</h2>
        </div>
      </div>

    
    </div>
  );
};

export default Login;
