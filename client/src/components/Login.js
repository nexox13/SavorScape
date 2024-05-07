import React, { useState } from 'react';
import Loginform from './Loginform';
import Registerform from './Registerform';
import UserSettings from './UserSettings'

import { useAppContext } from '../contexts/AppContext';

function Login() {
  const { colorTheme, loggedIn, setLoggedIn,} = useAppContext();
  const [isRegistering, setIsRegistering] = useState(false);

  setLoggedIn(true);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleGoBackClick = () => {
    setIsRegistering(false);
  };

  return (
    <div>
      {loggedIn ? ( 
        <UserSettings/>
      ):(
        <div className="bg-white rounded-xl p-4 mt-4 h-auto flex flex-col justify-center items-center">
        {/* Header */}
        <div className="font-mono text-xl">Login ~ Register</div>
        
        {/* Content */}
        <div className="flex justify-center p-4 mt-6 w-full bg-gray-200 rounded-xl">
          {isRegistering ? <Registerform /> : <Loginform />} 
        </div>

        {/* Login/Register */}
        <div className="flex justify-center p-4 mt-4 w-full bg-gray-200 rounded-xl">
          {isRegistering ? (
            <span onClick={handleGoBackClick} className="text-blue-500 cursor-pointer underline">Go back to Login</span>
          ) : (
            <span onClick={handleRegisterClick} className="text-blue-500 cursor-pointer underline"> Don't have an Account yet? Register here!</span>
          )}
        </div>
      </div>
      )}
    </div>
  );
}

export default Login;
