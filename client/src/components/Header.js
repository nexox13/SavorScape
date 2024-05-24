import React from 'react';
import Icon from './Icon';
import Search from './Search';
import { useAppContext } from '../contexts/AppContext';

function Header() {

  const { showLogin, 
          setShowLogin, 
          showAddRecipe ,
          setShowAddRecipe, 
          showSettings ,
          setShowSettings, 
          showNotepad, 
          setShowNotepad,
        } = useAppContext();


  const toggleInfoBox = (infoBoxType) => {
    switch (infoBoxType) {
      case 'notepad':
        setShowNotepad(true);
        setShowLogin(false);
        setShowAddRecipe(false);
        setShowSettings(false);
        if (showNotepad === true) {
          setShowNotepad(false);
        }
        break;
      case 'login':
        setShowNotepad(false);
        setShowLogin(true);
        setShowAddRecipe(false);
        setShowSettings(false);
        if (showLogin === true) {
          setShowLogin(false);
        }
        break;
      case 'addRecipe':
        setShowNotepad(false);
        setShowLogin(false);
        setShowAddRecipe(true);
        setShowSettings(false);
        if (showAddRecipe === true) {
          setShowAddRecipe(false);
        }
        break;
      case 'settings':
        setShowNotepad(false);
        setShowLogin(false);
        setShowAddRecipe(false);
        setShowSettings(true);
        if (showSettings === true) {
          setShowSettings(false);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="fixed top-0 w-full h-20 flex justify-evenly items-center z-50">
        
        <span className="bg-white rounded-full p-2.5 opacity-100 border -2 border-solid border-black"> 
          <Icon label="Notepad" onClick={() => toggleInfoBox('notepad')}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="3em"
            width="2.6em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
            <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
            <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path>
            <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path>
          </svg>
          </Icon>
        </span>

        <span className="bg-white rounded-full p-2.5 opacity-100 border -2 border-solid border-black"> 
          <Icon label="Login" onClick={() => toggleInfoBox('login')}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
          ></path>
          </svg>
          </Icon>
        </span>
        
        <Search/>

        <span className="bg-white rounded-full p-2.5 opacity-100 border -2 border-solid border-black"> 
          <Icon label="AddNewRecipe" onClick={() => toggleInfoBox('addRecipe')}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="3em"
            width="3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16,2H8C4.691,2,2,4.691,2,8v13c0,0.553,0.447,1,1,1h13c3.309,0,6-2.691,6-6V8C22,4.691,19.309,2,16,2z M20,16 c0,2.206-1.794,4-4,4H4V8c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4V16z"></path>
            <path d="M13 7L11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11z"></path>
          </svg>
          </Icon>
        </span>
        
        <span className="bg-white rounded-full p-2.5 opacity-100 border -2 border-solid border-black"> 
          <Icon label="Settings" onClick={() => toggleInfoBox('settings')}>
          <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          </Icon>
        </span>
    </div>
  );
}

export default Header;
