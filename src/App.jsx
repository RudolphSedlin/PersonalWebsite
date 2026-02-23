import React from "react";
import "./App.css";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import About from "./components/About.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App">
    <TransitionGroup component={null}>
    <CSSTransition
    key={location.pathname}
    classNames="page"
    timeout={250}
    unmountOnExit
    >
    <div className="page-wrap">
    {/* Pass location so the transition uses the keyed location */}
    <Routes location={location}>
    <Route path="/" element={<About />} />
    <Route path="/Certifications" element={<Certifications />} />
    <Route path="/Projects" element={<Projects />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </div>
    </CSSTransition>
    </TransitionGroup>
    </div>
  );
}

export default App;
