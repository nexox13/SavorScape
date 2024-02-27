import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  return <>
    <div className="min-h-screen">
      <Header className="sticky top-0 left-0 w-full bg-gray-300 p-4" />

      <MainContent className="w-full"/>
    </div>
  </>
}

export default App
