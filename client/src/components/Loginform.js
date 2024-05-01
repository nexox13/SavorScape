import React from 'react';

function Loginform() {
  return (
    <form className="form_main" action="">
      <div id="ContentContainer" className="mt-4">
        <div className="relative">
          <input placeholder="Username" type="text" className="p-2 rounded-xl pl-10" />
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
          <input placeholder="Password" type="password" className="p-2 rounded-xl pl-10 mt-4" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.4em"
            width="1.4em"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 left-3 mt-4"
          >
            <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"></path>
          </svg>
        </div>
      </div>

      <button className="font-mono text-l bg-red p-1.5 rounded-xl mt-4">
        Submit
      </button>
    </form>
  );
}

export default Loginform;
