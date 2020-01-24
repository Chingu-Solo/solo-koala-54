import React, {useState} from 'react';
import {
    useRouteMatch,
    Redirect
} from "react-router-dom";
import './styles/Toolbar.css';
import gridViewIcon from '../images/gridviewicon.svg';
import barViewIcon from '../images/barviewicon.svg';
import darkThemeIcon from '../images/darkthemeicon.svg';
import lightThemeIcon from '../images/lightthemeicon.svg';
import resetIcon from '../images/reseticon.svg';
import searchIcon from '../images/searchicon.svg';

export default function Toolbar(props) {
    let filter = useRouteMatch('/:page/:filter');
    const [query, setQuery] = useState(filter ? filter.params.filter : '');
    let [withRedirect, setWithRedirect] = useState(false);
    const search = event => {
        setWithRedirect(true);
        setQuery(event.target.value);
    };
    const handleReset = () => {
        props.setCustomText('');
        props.setFontSize(18);
        props.setGridView(true);
        props.setLightTheme(true);
        setQuery('');
        props.setCollectionList([]);
        window.scrollTo(0, 0);
        setWithRedirect(true);
    };
    return (
        <nav className="toolbar">
            <div className="toolbar__search">
                <img src={searchIcon} alt="" />
                <input role="search" className="toolbar__search__input" type="text" onChange={search} placeholder="Search" title="search" value={query} />
            </div>
             <div className="toolbar__font-control">
                <input className="toolbar__custom-text" onChange={event => props.setCustomText(event.target.value)} value={props.customText} type="text" placeholder="Custom Text..." />
                <div className="toolbar__font-size">
                    <label htmlFor="toolbar__set-font-size" className="toolbar__font-size__label">Font Size: {props.fontSize}</label>
                    <input id="toolbar__set-font-size" onChange={event => props.setFontSize(event.target.value)} className="toolbar__set-font-size clickable" type="range" min="4" max="128" step="2" value={props.fontSize} />
                </div>
            </div>
            <div className="toolbar__display-control">
                <button className="icon-button toolbar__layout-toggle" onClick={() => props.setGridView(!props.gridView)} title={props.gridView ? 'Bar view' : 'Grid view'}><img src={props.gridView ? barViewIcon : gridViewIcon} alt="" /></button>
                <button className="icon-button toolbar__theme-toggle" onClick={() => props.setLightTheme(!props.lightTheme)} title={props.lightTheme ? 'Dark theme' : 'Light theme'}><img src={props.lightTheme ? darkThemeIcon : lightThemeIcon} alt="" /></button>
            </div>
            <button className="icon-button toolbar__reset" onClick={handleReset} title="reset"><img className="toolbar__reset" src={resetIcon} alt="" /></button>
            {withRedirect && <Redirect to={`${query}`}/>}
        </nav>
    )
}