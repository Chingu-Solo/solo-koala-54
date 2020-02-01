import React, {useState, createRef} from 'react';
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
import {useSpring, animated} from 'react-spring';
import { StyleSheet, css } from 'aphrodite';

export default function Toolbar(props) {
    let filter = useRouteMatch('/:filter');
    const [query, setQuery] = useState(filter ? filter.params.filter : '');
    let [withRedirect, setWithRedirect] = useState(false);
    const search = event => {
        setWithRedirect(true);
        setQuery(event.target.value.replace(/\W/g, '')); 
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
    let [searchBoxFocused, setSearchBoxFocused] = useState(false);
    const searchAnimation = useSpring({transform: `scale(${searchBoxFocused ? 1.2 : 1})`});
    const circleSize = 12+(props.fontSize/8);
    const sliderStyle = StyleSheet.create({
        circleSize: {
             '::-webkit-slider-thumb' : {
                  width: circleSize+'px',
                  height: circleSize+'px'
        }
    }
   });
    return (
        <nav className="toolbar">
            <div className="toolbar__search">
                <animated.img style={searchAnimation} src={searchIcon} alt="" />
                <input onFocus={() => setSearchBoxFocused(true)} onBlur={() => setSearchBoxFocused(false)} role="search" className="toolbar__search__input" type="text" onChange={search} placeholder="Search" title="search" value={query} />
            </div>
             <div className="toolbar__font-control">
                <input className="toolbar__custom-text" onChange={event => props.setCustomText(event.target.value)} value={props.customText} type="text" placeholder="Custom Text..." title="Custom Text..." />
                <div className="toolbar__font-size">
                    <label htmlFor="toolbar__set-font-size" className="toolbar__font-size__label">Font Size: {props.fontSize}</label>
                    <input id="toolbar__set-font-size" onChange={event => props.setFontSize(event.target.value)} className={"toolbar__set-font-size clickable "+css(sliderStyle.circleSize)} type="range" min="4" max="128" step="2" value={props.fontSize} />
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