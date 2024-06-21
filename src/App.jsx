import React from 'react'
import './App.css'

import {Route, Routes, Navigate} from 'react-router-dom'

import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Qualifications from './components/Qualifications.jsx'

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Qualifications' element={<Qualifications />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
  );
}

export default App
