// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/hobbies';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Hobbies />
        <div className="horizontal-sections">
          <Contact />
          <Certificates />
        </div>
      </main>
    </div>
  );
}

export default App;
