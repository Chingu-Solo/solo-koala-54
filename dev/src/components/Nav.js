import React, {useState} from 'react';
import {
    useRouteMatch,
    Redirect
} from "react-router-dom";
import './styles/Nav.css';
import gridViewIcon from '../images/gridviewicon.svg';
import barViewIcon from '../images/barviewicon.svg';
import darkThemeIcon from '../images/darkthemeicon.svg';
import lightThemeIcon from '../images/lightthemeicon.svg';
import resetIcon from '../images/reseticon.svg';
import searchIcon from '../images/searchicon.svg';

export default function Nav(props) {
    const [query, setQuery] = useState('');
    let match = useRouteMatch();
    let [withRedirect, setWithRedirect] = useState(false);
    const search = event => {
        setWithRedirect(true);
        setQuery(event.target.value);
    }
    return (
        <nav className="toolbar">
            <div className="toolbar__search">
                <img src={searchIcon} alt="" />
                <input className="toolbar__search__input" type="text" onChange={search} placeholder="Search" title="search" />
            </div>
             <div className="toolbar__font-control">
                <input className="toolbar__custom-text" onChange={event => props.setCustomText(event.target.value)} type="text" placeholder="Custom Text..." />
                <div className="toolbar__font-size">
                    <label htmlFor="toolbar__set-font-size" className="toolbar__font-size__label">Font Size: {props.fontSize}</label>
                    <input id="toolbar__set-font-size" onChange={event => props.setFontSize(event.target.value)} className="toolbar__set-font-size clickable" type="range" min="4" max="128" step="2" value={props.fontSize} />
                </div>
            </div>
            <div className="toolbar__display-control">
                <img onClick={() => props.setGridView(!props.gridView)} className="toolbar__layout-toggle clickable" src={props.gridView ? barViewIcon : gridViewIcon} title={props.gridView ? 'Bar view' : 'Grid view'} alt="Toggle bar/grid layout" />
                <img onClick={() => props.setLightTheme(!props.lightTheme)} className="toolbar__theme-toggle clickable" src={props.lightTheme ? darkThemeIcon : lightThemeIcon} title={props.lightTheme ? 'Dark theme' : 'Light theme'} alt="Toggle dark/light theme" />
            </div>
            <img className="toolbar__reset clickable" src={resetIcon} title="reset" alt="reset" />
            {withRedirect && <Redirect to={`${match.path}/${query}`}/>}
        </nav>
    )
}