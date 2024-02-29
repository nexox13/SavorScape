import React from 'react';
import { useAppContext } from '../contexts/AppContext';

import '../index.css';
function InfoBox() {
  const { showImpressum, showAddRecipe, showSettings } = useAppContext();

  let content;

  if (showImpressum) {
    content = <div>Impressum content goes here</div>;
  } else if (showAddRecipe) {
    content = <div>Add Recipe content goes here</div>;
  } else if (showSettings) {
    content = <div>Settings content goes here</div>;
  } else {
    content = <div>No info box selected</div>;
  }

  return (
    <div className="custom-info-box">
      {content}
    </div>
  );
}

export default InfoBox;
