import React from 'react'; // Don't forget to import React
import Header from './components/Header';
import MainContent from './components/MainContent';
import { AppContextProvider } from './contexts/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen max-h-screen overflow-hidden">
        <Header className="sticky top-0 left-0 w-auto z-50 bg-gray-300 p-4 opacity-65" />

        <MainContent className="w-full h-full" />
      </div>
    </AppContextProvider>
  );
}

export default App;
