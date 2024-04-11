import React, { useState, useEffect } from 'react';

function Notepad() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('notepad_content');

    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notepad_content', content);
  }, [content]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <span style={{ opacity: 1, backgroundColor:'white', fontWeight: 'bold' }}>
      <div className="bg-gray-100 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 flex justify-center">Notepad</h2>
        <textarea
          className="w-full h-96 min-h-10 max-h-96 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          value={content}
          onChange={handleChange}
          placeholder="Write your notes here..."
        />
        <div>
          <button
            className="mt-10 bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              localStorage.removeItem('notepad_content');
              setContent('');
            }}
          >
            Clear Notepad
          </button>
        </div>
      </div>
    </span>
  );
}

export default Notepad;