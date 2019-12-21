import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#aboutMe">
            <li>About Me</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contact">
            <li>Contact Me</li>
          </a>
          <a href="https://www.docdroid.net/jX8ac1P/my-resume.pdf" target='_blank' rel='noopener noreferrer'>
            <li>Resume</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}