import React from 'react';
import '../styles/sass.css';

function Main() {
    return (
        <main>
            <section className="body-content" id="aboutMe">
                <aside id="asideLabels">About Me</aside>
                <p>
                    Hello, my name is Kolt Bodzo. I am an aspiring soon-to-be full-stack developer
                    with hopes to make a fruitful career.
                    <br />
                    <br />
                    I am no stranger to working with technology,
                    whether it be software or hardware. I have been programming in different languages
                    for about ten years, and have built PCs and done PC repairs for about eight years.
                    I am proficient in Java, and have basic knowledge of languages such as Python, SQL,
                    C++, JavaScript, and will soon be proficient in HTML and CSS.
                    <br />
                    <br />
                    If you have any questions, or would like to make any inquiries, please feel free to
                    reach out to me using any of my contacts at the bottom of this portfolio!
                </p>
            </section>

            <section className="body-content" id="work">
                <aside id="asideLabels">Work</aside>

                <section id="project-cards">
                    <div className="card-large">
                        <a href="https://github.com/Jamesgit22/Threadi">
                            <img src="./images/threadi.png" alt="threadi.png" />
                            <canvas className="card-hover"></canvas>
                        </a>
                        <div>
                            <h2>Threadi</h2>
                            <h3>MERN/Apollo GraphQL</h3>
                        </div>
                    </div>
                    <section>
                        <div className="card-small">
                            <a href="https://elfelfa.github.io/Real-People-Travel/index.html" className="card-hover">
                                <img src="./images/real-people-travel.png" alt="Real People Travel.png" />
                                <canvas className="card-hover"></canvas>
                            </a>
                            <div>
                                <h2>Real People Travel</h2>
                                <h3>API Integration</h3>
                            </div>
                        </div>
                        <div className="card-small">
                            <a href="https://github.com/Elfelfa/lorem-idle" className="card-hover">
                                <img src="./images/e-commerce.png" alt="Lorem Idle.png" />
                                <canvas className="card-hover"></canvas>
                            </a>
                            <div>
                                <h2>Lorem Idle</h2>
                                <h3>Express/MySQL2</h3>
                            </div>
                        </div>
                        <div className="card-small">
                            <a href="https://github.com/Elfelfa/BlackjackJFrame" className="card-hover">
                                <img src="./images/c_Template.png" alt="Blackjack.jpg" />
                                <canvas className="card-hover"></canvas>
                            </a>
                            <div>
                                <h2>Blackjack</h2>
                                <h3>Java/J-Frame</h3>
                            </div>
                        </div>
                        <div className="card-small">
                            <a href="https://github.com/Elfelfa/e-commerce-db" className="card-hover">
                                <img src="./images/businessDB.png" alt="E-commerce App.jpg" />
                                <canvas className="card-hover"></canvas>
                            </a>
                            <div>
                                <h2>E-Commerce DB</h2>
                                <h3>MySQL2/Express</h3>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

            <section className="body-content" id="contactMe">
                <aside id="asideLabels">Contact Me</aside>

                <ul className="contacts">
                    <a>555-555-5555</a>
                    <a>KoltBodzo@gmail.com</a>
                    <a href="https://github.com/Elfelfa">GitHub</a>
                    <a href="https://faketwitter/">Twitter</a>
                    <a href="https://fakelinkedin/">Linkedin</a>
                </ul>
            </section>
        </main>
    );
}

export default Main;