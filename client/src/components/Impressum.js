import React from 'react';

function Impressum() {
  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4 "> Impressum</h1>
      <p className="mb-4 flex justify-center font-serif text-lg">SavorScape</p>

      <strong className="mb-4">Address:</strong>
      <p></p>
      <a href="https://github.com/nexox13/SavorScape" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://github.com/nexox13/SavorScape</a>
      <p className="mb-4"></p>

      <strong className="mb-4">Disclaimer:</strong> 
      <p className="mb-4">While we strive to provide accurate and up-to-date information, Savorscape cannot guarantee the correctness, completeness, or reliability of the content provided on our platform. Users are encouraged to verify information independently and use their discretion when following recipes or culinary advice.</p>

     
      <strong className="mb-4">Copyright Notice:</strong>
      <p className="mb-4">All content on Savorscape, including text, images, and recipes, is protected by copyright law. Users are prohibited from reproducing, distributing, or modifying content from our website without prior authorization from Savorscape or the respective copyright holders.
      </p>

      <strong className="mb-4">Technical Information:</strong>
      <p className="mb-4">Savorscape is built using modern web technologies, including React and Tailwind CSS, to deliver an intuitive and visually appealing user experience. We are committed to maintaining the highest standards of performance, security, and accessibility for our users.
      </p>

      <strong className="mb-4">Privacy Policy:</strong>
      <p className="mb-4">For information about how we collect, use, and protect your personal data, please refer to our Privacy Policy.
      </p>
    </div>
  );
}

export default Impressum;
