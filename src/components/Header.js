import React from 'react';
import '../styles/Header.css';

function Header({ handlePage }) {
    return (
        <>
            <section className="header-top">
                <h1>Kolt Bodzo</h1>

                <nav>
                    <a onClick={() => handlePage('aboutMe')}>About Me</a>
                    <a onClick={() => handlePage('projects')}>Projects</a>
                    <a onClick={() => handlePage('contactMe')}>Contact Me</a>
                    <a>Resume</a>
                </nav>
            </section>

            <section className="hero"><h2>A collection of full-stack projects.</h2></section>

        </>
    );
}

export default Header;
