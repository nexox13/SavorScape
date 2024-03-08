import React from 'react';

function Icon({ link, label, onClick, children }) {
  return (
    <a href={link} className="icon" onClick={onClick}>
      {children}
      {/* <span className="label">{label}</span> */}
    </a>
  );
}

export default Icon;
