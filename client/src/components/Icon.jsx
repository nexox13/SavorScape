import React from 'react'

function Icon({ src, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="w-6 h-6 hover:text-blue-500" />
    </a>
  )
}

export default Icon