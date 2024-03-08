import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import Notepad from './Notepad';
import Icon from './Icon';

import '../index.css';

function InfoBox() {
  const { 
    showNotepad, 
    showImpressum, 
    showAddRecipe, 
    showSettings, 
    setShowNotepad, 
    setShowImpressum, 
    setShowAddRecipe,
    setShowSettings
  } = useAppContext();
  
  const toggleClose = () => {
    setShowNotepad(false)
    setShowImpressum(false)
    setShowAddRecipe(false)
    setShowSettings(false)
  }

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
       <Icon label="Close" onClick={()=> toggleClose()} className="place-content-end">
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          stroke-width="0" 
          viewBox="0 0 1024 1024" 
          height="2.3em" 
          width="2.3em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
          <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
        </svg>
      </Icon>
      {content}
    </div>
  );
}

export default InfoBox;
