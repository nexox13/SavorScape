import React, { useState } from 'react';
import InfoBox from './InfoBox';
import { useAppContext } from '../contexts/AppContext';
function MainContent() {

  const { showImpressum, showAddRecipe, showSettings, showNotepad} = useAppContext();


  return ( 
    <>

    {/* Map-Implementation */}
    {/* https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/ */}

      {showImpressum && <InfoBox type="impressum" />}
      {showAddRecipe && <InfoBox type="addRecipe" />}
      {showSettings && <InfoBox type="settings" />}
      {showNotepad && <InfoBox type="notepad" />}

    </>
  );
}

export default MainContent;
