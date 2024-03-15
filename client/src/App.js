import React from 'react'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import { AppContextProvider } from './contexts/AppContext';
//import RecipeValidation from './validation/inputRecipe'

function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen max-h-screen overflow-hidden">
        <Header className="sticky top-0 left-0 w-auto p-4 opacity-75 z-50"/>

          <MainContent className="w-full h-full" />
      </div>
    </AppContextProvider>
  );
}

export default App;
