import React, { useState } from 'react';
import Loginform from './Loginform';
import RegisterForm from './Registerform';
import { useAppContext } from '../contexts/AppContext';

function Login() {
  const { colorTheme } = useAppContext();
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleGoBackClick = () => {
    setIsRegistering(false);
  };

  return (
    <div>
      <div className="bg-white rounded-xl p-4 h-auto flex flex-col justify-center items-center">
        {/* Header */}
        <div className="font-mono text-xl">Login</div>
        
        {/* Content */}
        <div className="flex justify-center p-4 mt-6 w-full bg-gray-200 rounded-xl">
          {isRegistering ? <RegisterForm /> : <Loginform />} 
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
    </div>
  );
}

export default Login;
