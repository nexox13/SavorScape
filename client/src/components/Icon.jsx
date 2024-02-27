import React from 'react';

function Icon({ children, label, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

export default Icon;
