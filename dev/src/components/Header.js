import React from 'react';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
import logo from '../images/logo.svg';
import logoCondensed from '../images/logocondensed.svg';
import './styles/Header.css';

function Header() {
    let match = useRouteMatch('/:page');
    if (!match) { match = { url: '/'}; } // hack for before redirect happens on first load
    return (
        <header className="pageHeader">
            <img className="pageHeader__logo" src={logo} alt="Solo-Koala-54 via Google Fonts" />
            <img className="pageHeader__logo--condensed" src={logoCondensed} alt="Solo-Koala-54 via Google Fonts" />
            <nav className="pageHeader__menu">
                <Link className={`pageHeader__link ${match.url.match('/') && 'pageHeader__link--active'}`} to="/">Catalog</Link>
                <Link className={`pageHeader__link ${match.url === '/featured' && 'pageHeader__link--active'}`} to="/featured">Featured</Link>
                <Link className={`pageHeader__link ${match.url === '/articles' && 'pageHeader__link--active'}`} to="/articles">Articles</Link>
                <Link className={`pageHeader__link ${match.url === '/about' && 'pageHeader__link--active'}`} to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;