import React from 'react'
import './App.css'

import {Route, Routes, Navigate} from 'react-router-dom'

import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Blog' element={<Blog />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
  );
}

export default App
