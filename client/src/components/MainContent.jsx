import React, { useState } from 'react';
import InfoBox from './InfoBox';
import { useAppContext } from '../contexts/AppContext';
function MainContent() {

  const { showImpressum, showAddRecipe, showSettings} = useAppContext();


  return (
    <div>

      {showImpressum && <InfoBox type="impressum" />}
      {showAddRecipe && <InfoBox type="addRecipe" />}
      {showSettings && <InfoBox type="settings" />}

    </div>
  );
}

export default MainContent;
