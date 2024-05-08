import React from 'react';
import { useAppContext } from '../contexts/AppContext';

function UserSettings() {
    const { colorTheme, settingsUsername, settingsUserPassword, handleDeleteAccount } = useAppContext();

    return (
      <div className="bg-white mt-4 h-auto rounded-xl p-4">
        <header className="font-mono text-xl font-bold mb-4">Account Settings:</header>
        <section className="mt-4">
          {/* Username */}
          <div className="border-b-2 border-gray-300 pb-2 mb-4 flex justify-between items-center mr-6">
            <div className="text-lg font-semibold">Username:</div>
            <div className="">{settingsUsername}</div>
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
          </div>

          
          {/* Password */}
          <div className="border-b-2 border-gray-300 pb-2 mb-4 mr-6 flex justify-between items-center">
            <div className="text-lg font-semibold">Password:</div>
            <div className=''>{settingsUserPassword}</div>
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
          </div>  
          
          {/* Delete Account */}
          <div className={`mt-4 underline text-black font-bold cursor-pointer rounded-xl border border-black p-2 w-2/4 flex justify-center ${colorTheme}`} onClick={handleDeleteAccount}>
            Delete Account
          </div>

        </section>
      </div>
    );
}

export default UserSettings;