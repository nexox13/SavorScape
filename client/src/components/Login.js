import React, { useState } from 'react';
import Registerform from './Registerform';
import Loginform from './Loginform';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your own logic to handle form submission
    // This example just clears the form for now
    setUsername('');
    setPassword('');
    setErrorMessage('');
    console.log('Submitted login form:', { username, password }); // Replace with your logic
    onSubmit({ username, password });
  };

  return (
    <>
      <h1 className="flex justify-center font-mono text-xl">Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Login form JSX */}
      </form>
    </>
  );
};

const RegistrationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your own logic to handle registration submission
    // This example just clears the form for now
    setUsername('');
    setPassword('');
    setEmail('');
    console.log('Submitted registration form:', { username, password, email }); // Replace with your logic
    onSubmit({ username, password, email });
  };

  return (
    <>
      <h1 className="flex justify-center font-mono text-xl">Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Registration form JSX */}
      </form>
    </>
  );
};

const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginFormSubmit = (data) => {
    console.log('Login form submitted with data:', data);
  };

  const handleRegistrationFormSubmit = (data) => {
    console.log('Registration form submitted with data:', data);
  };

  const handleFormSwitch = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="container mx-auto mt-4 flex items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        {showRegisterForm ? (
          <RegistrationForm onSubmit={handleRegistrationFormSubmit} />
        ) : (
          <LoginForm onSubmit={handleLoginFormSubmit} />
        )}
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleFormSwitch} className="text-sm text-blue-500 hover:underline">
            {showRegisterForm ? 'Already have an account? Login here' : 'New user? Register here'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
