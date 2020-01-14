import React from 'react';
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>TODO:logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link to="/featured">Featured</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;