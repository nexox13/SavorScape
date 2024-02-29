import React, { useState } from 'react';
import InfoBox from './InfoBox';
import { useAppContext } from '../contexts/AppContext';
function MainContent() {

  const { showImpressum, showAddRecipe, showSettings} = useAppContext();


  return (
    <div>

    {/* Map-Implementation */}
    {/* https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/ */}

      {showImpressum && <InfoBox type="impressum" />}
      {showAddRecipe && <InfoBox type="addRecipe" />}
      {showSettings && <InfoBox type="settings" />}

    </div>
  );
}

export default MainContent;
