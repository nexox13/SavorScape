import React, { useState } from 'react';
import InfoBox from './InfoBox';
import MapRenderer from './Map/MapRenderer';
import { useAppContext } from '../contexts/AppContext';
import ContentBox from './ContentBox/ContentBox';

function MainContent() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const { showLogin, showAddRecipe, showSettings, showNotepad, searchSubmit } = useAppContext();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="relative pt-0">
      <div className={`z-${clicked ? '10' : '0'}`} onClick={handleClick}>
        {showLogin && <InfoBox type="Login" className="z-50" />}
        {showAddRecipe && <InfoBox type="addRecipe" className="z-50" />}
        {showSettings && <InfoBox type="settings" className="z-50" />}
        {showNotepad && <InfoBox type="notepad" className="z-50" />}
      </div>
      


      <div
        className={`absolute inset-0 bg-transparent ${clicked ? 'z-10' : '-z-10'}`}
        onClick={() => setClicked(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      
      <MapRenderer />

    </div>
  );
}

export default MainContent;
