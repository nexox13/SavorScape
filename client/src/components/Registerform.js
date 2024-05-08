import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

function Registerform() {
  const [showPassword, setShowPassword] = useState(false);

  const { setLoggedIn, setJsWebToken, setSettingsUsername, setSettingsUserPassword  } = useAppContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
  
    // Perform validation
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
  
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(password)) {
      errors.password = 'Password must contain at least one capital letter';
    }
  
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://10.115.1.14:3001/api/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setLoggedIn(true);
          // setJsWebToken(data.token);
          setSettingsUsername(username);
          setSettingsUserPassword((prevPassword) => {
            return prevPassword || password;
          });
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setErrorMessage('Wrong User or Password');
      }
  
      console.log('Form submitted:', { username, password });
    }
  };
  


  return (
    <form className="form_main" action="">
      <div id="ContentContainer" className="mt-4">

        <div id="messageContainer" className="font-mono text text-red mb-2">
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        
        <div className="relative">
        <input
          placeholder="Username_Register"
          type="text"
          className="p-2 rounded-xl pl-10"
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <p className="text-red">{errors.username}</p>}

          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 left-3"
          >
            <path
              d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
            ></path>
          </svg>
        </div>


        <div className="relative">
          <input
            placeholder="Password_Register"
            type={showPassword ? 'text' : 'password'}
            className="p-2 rounded-xl pl-10 mt-4"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="text-red">{errors.password}</p>}

          <svg
            className="absolute top-2 left-3 mt-4"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"></path>
          </svg>

          <svg
            onClick={togglePasswordVisibility}
            className="absolute top-2 right-3 mt-4 cursor-pointer"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showPassword ? (
              <>
                <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
              </>
            ) : (
              <>
                <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512z" />
                <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z" />
              </>
            )}
          </svg>

        </div>
      </div>


      <button onClick = {handleSubmit} className="font-mono text-l bg-red p-1.5 rounded-xl mt-4" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Registerform;
