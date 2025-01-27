import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ScrollIndicator from './components/ScrollIndicator.jsx'
const App = () => {
  return (
    <div>
      <ScrollIndicator />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App