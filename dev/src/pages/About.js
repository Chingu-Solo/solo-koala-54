import React from 'react';
import './styles/About.css';

function About() {
    return (
        <main className="about">
            <section>
                <header>
                    <h1>A Reimplementation</h1>
                </header>
                <p>
                    This site is a reimplementation of the already wonderfully built <a href="https://fonts.google.com/">Google Fonts</a>.
                    I've created it for my <a href="https://www.chingu.io/">Chingu</a> pre-work project.
                    While having fun coding the workings of this site, it felt 
                    appropriate to bring a little bit of fun into the design.
                </p>
                <p>Please take a look at the GitHub respotitory linked in the footer for 
                    details on how this site was devoloped.</p>
            </section>
        </main>
    )
}

export default About;