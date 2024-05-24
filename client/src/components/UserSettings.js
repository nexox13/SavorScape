import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

function UserSettings() {
  const {
    colorTheme,
    settingsUsername,
    setIsRegistering,
    setSettingsUsername,
    settingsUserPassword,
    setSettingsUserPassword,
    setLoggedIn,
    userId
  } = useAppContext();

  const [editPasswordState, setEditPasswordState] = useState(false);

  const handleLogOut = () => {
    setLoggedIn(false);
    setSettingsUsername("");
    setSettingsUserPassword("");
    setIsRegistering(false);
    console.log("Logged Out ");
  };
  
  const handleDeleteAccount = async () => {
    console.log('Deleting Account...' , userId);
    try {
        // Send PUT request to update password
        const response = await fetch(`http://10.115.1.14:3001/register/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setLoggedIn(false);
        } else {
            throw new Error('Error deleting Account');
        }
    } catch (error) {
        console.error('Error deleting Account:', error);
    }
  };

  const toggleEditPassword = () => {
    setEditPasswordState(!editPasswordState);
  };

  const handlePasswordChange = async (event) => {
    console.log('Changing password...');
    console.log('User ID:', userId);
    try {
        // Send PUT request to update password
        const response = await fetch(`http://10.115.1.14:3001/register/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                password: settingsUserPassword
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setLoggedIn(true);
            setSettingsUserPassword(settingsUserPassword);
        } else {
            throw new Error('Password change failed');
        }
    } catch (error) {
        console.error('Error changing password:', error);
    }
};

  const handleConfirmPasswordChange = async () => {
    if (settingsUserPassword !== '') {
      await handlePasswordChange();
    } else {
      alert('Please enter a new password');
    }
    setEditPasswordState(!editPasswordState);
  };

  return (
    <div className="bg-white mt-4 h-auto rounded-xl p-4">
      <header className="font-mono text-xl font-bold mb-4">
        Account Settings:
      </header>
      <section className="mt-4">
        {/* Username */}
        <div className="border-b-2 border-gray-300 pb-2 mb-4 flex justify-between items-center mr-6">
          <div className="text-lg font-semibold">Username:</div>
          <div className="border border-black rounded pr-1 pl-1 ">
            {settingsUsername}
          </div>
          <div w-40>

          </div>
        </div>

        {/* Password */}
        <div className="border-b-2 border-gray-300 pb-2 mb-4 mr-6 flex justify-between items-center">
          <div className="text-lg font-semibold">Password:</div>
            {editPasswordState ? (
              <input
                type="text"
                value={settingsUserPassword}
                onChange={(e) => setSettingsUserPassword(e.target.value)}
                className="border border-black pr-1 pl-1 rounded w-auto max-w-40"
              />
            ) : (
              <div className="border border-black pr-1 pl-1 rounded">
                {"x ".repeat(settingsUserPassword.length)}
          </div>
          )}


          {editPasswordState ? (
            <div className="flex items-center">
              <div className="ml-2">
                <svg
                  // Save
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleConfirmPasswordChange} // Handle confirmation
                  className="cursor-pointer"
                >
                  <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="ml-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleEditPassword}
                  className="cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div
          className={`mt-4 underline text-black font-mono font-bold cursor-pointer rounded-xl border border-black p-2 w-3/5 flex justify-center ${colorTheme}`}
          onClick={handleDeleteAccount}
        >
          Delete Account
        </div>
      </section>
      <div
        className={`mt-4 underline text-black font-mono font-bold cursor-pointer rounded-xl border border-black p-2 w-3/5 flex justify-center ${colorTheme}`}
        onClick={handleLogOut}
      >
        Log Out
      </div>
    </div>
  );
}

export default UserSettings;
