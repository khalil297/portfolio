import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 200; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <h1>Khalil Kassab</h1>
      <nav>
        <ul className="navbar">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Professional Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#hobbies" onClick={(e) => { e.preventDefault(); scrollToSection('Hobbies'); }}>Hobbies and Extracurricular Activities</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact/Certificates</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
