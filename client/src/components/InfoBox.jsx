import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import Notepad from './Notepad';

import '../index.css';

function InfoBox() {
  const { showNotepad, showImpressum, showAddRecipe, showSettings } = useAppContext();

  let content;

  if (showNotepad) {
    content = <Notepad />;
  } else if (showImpressum) {
    content = <div>Impressum content goes here</div>;
  } else if (showAddRecipe) {
    content = <div>Add Recipe content goes here</div>;
  } else if (showSettings) {
    content = <div>Settings content goes here</div>;
  }

  return (
    <div className="custom-info-box">
      {content}
    </div>
  );
}

export default InfoBox;
