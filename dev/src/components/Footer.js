import React from 'react';
import gitLogoDark from '../images/GitHub-Mark-64px.png';
import gitLogoLight from '../images/GitHub-Mark-Light-64px.png';
import './styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/Chingu-Solo/solo-koala-54" className="github-link">
                <div className="github-link__left-text">The GitHub Repo</div>
                <div>
                    <img src={gitLogoLight} className="github-logo--light" alt=""/>
                    <img src={gitLogoDark} className="github-logo--dark" alt=""/>
                </div>
                <div className="github-link__right-text">Chingu Solo project</div>
            </a>
        </footer>
    );
}