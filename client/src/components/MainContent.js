import React, { useState } from 'react';
import InfoBox from './InfoBox';
import MapRenderer from './Map/MapRenderer';
import { useAppContext } from '../contexts/AppContext';
import ContentBox from './ContentBox/ContentBox';

function MainContent() {
  const [clicked, setClicked] = useState(false);
  
  const { showLogin, showAddRecipe, showSettings, showNotepad, searchSubmit } = useAppContext();

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className="relative pt-0">
        <div className={`z-${clicked ? '10' : '0'}`} onClick={handleClick}>
          {showLogin && <InfoBox type="Login" className="z-40" />}
          {showAddRecipe && <InfoBox type="addRecipe" className="z-40" />}
          {showSettings && <InfoBox type="settings" className="z-40" />}
          {showNotepad && <InfoBox type="notepad" className="z-40" />}
        </div>
        
        <div
          className={`absolute inset-0 bg-transparent ${clicked ? 'z-10' : '-z-10'}`}
          onClick={() => setClicked(false)}

        />
      
        <MapRenderer />
      </div>
      
      {searchSubmit && (
        <div className="map-container-relative ">
          <div className="absolute top-24 left-4 bottom-16 w-3/4 z-50">
            {/* Durch das transparente Objekt welches über die Map geladen wird kann die Map nicht mittels dem Cursor bewegt werden da sie darutner liegt */}
            <ContentBox />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
