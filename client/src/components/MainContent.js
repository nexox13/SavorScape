import React from 'react';
import InfoBox from './InfoBox';
import { useAppContext } from '../contexts/AppContext';
import MapRenderer from './Map/MapRenderer';
function MainContent() {

  const { showImpressum, showAddRecipe, showSettings, showNotepad} = useAppContext();


  return ( 
    <>
      <div className="relative h-full">
               
        {showImpressum && <InfoBox type="impressum" className="z-50" />} 
        {showAddRecipe && <InfoBox type="addRecipe" className="z-50" />} 
        {showSettings && <InfoBox type="settings" className="z-50" />} 
        {showNotepad && <InfoBox type="notepad" className="z-50" />} 

        <MapRenderer/>
      </div>
  </>
  );
}

export default MainContent;
