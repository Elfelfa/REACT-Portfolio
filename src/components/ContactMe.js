import React from 'react';
import '../styles/Header.css';

function ContactMe({ handlePage }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="col text-align-left">Kolt Bodzo</h1>

                    <nav className="col gx-3">
                        <a onClick={() => handlePage('aboutMe')}>About Me</a>
                        <a onClick={() => handlePage('projects')}>Projects</a>
                        <a onClick={() => handlePage('contactMe')}>Contact Me</a>
                        <a>Resume</a>
                    </nav>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <section className="hero"><h2>A collection of full-stack projects.</h2></section>
                </div>
            </div>
        </>
    );
}

export default ContactMe;