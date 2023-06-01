import React from 'react';
import '../styles/sass.css';

function Header() {
    return (
        <header>
            <section className="header-top">
                <h1>Kolt Bodzo</h1>

                <nav>
                    <a href="#aboutMe">About Me</a>
                    <a href="#work">Work</a>
                    <a href="#contactMe">Contact Me</a>
                    <a href="https://docs.google.com/document/d/1L0N1fN8KsBEq5qpLTn0RyMOWnGMTIR4Z/edit?usp=sharing&ouid=108194109850536069668&rtpof=true&sd=true">Resume</a>
                </nav>
            </section>

            <section className="hero" style={{background: `linear-gradient(to top, rgba(35, 99, 196, 0.6), rgba(85, 153, 255, 0.4)), url(./images/02-hero-bg.jpg)`}}><h2>A collection of full-stack projects.</h2></section>

        </header>
    );
}

export default Header;
