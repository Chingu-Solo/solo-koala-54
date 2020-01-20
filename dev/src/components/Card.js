import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import './styles/Card.css';
import retrieveFontFileUrl from '../controllers/retrieveFontFileUrl';
import removeIcon from '../images/removefromcollectionicon.svg';
import addIcon from '../images/addtocollectionicon.svg';

export default function Card(props) {
    const [fontUrl, setFontUrl] = useState(false);
    const name = props.family;
    const googleFont = !fontUrl ? { fontFamily: 'inherit' } : {
        fontFamily: props.family,
        fontStyle: "normal",
        fontWeight: "normal",
        src: `url('${fontUrl}') format('truetype')`
    };
    const styles = () => StyleSheet.create({
        font: {
            fontFamily: [googleFont],
            fontSize: props.fontSize+'px'
        }
    });
    const removeFromCollection = () => {
        props.removeFromCollection(name);
    }
    const addToCollection = () => {
        props.addToCollection({...props, styles});
    }
    const headerTitle = `${props.isInCollection ? 'Remove' : 'Add'} ${name} ${props.isInCollection ? 'from' : 'to'} collection`;
    const addRemoveOnclick = props.isInCollection ? removeFromCollection : addToCollection;
    useEffect(() => {
        let active = true;
        retrieveFontFileUrl(name, props.files).then(url => {
            active && setFontUrl(url);
        });        
          return () => active = false;
        }, [name, props.files]);
    return (
        <div className={'card '+css(styles.font)}> 
                <header className="card__heading" title={headerTitle} onClick={addRemoveOnclick}>
                {props.isInCollection ? 
                    <img className="card__collection-button card__collection-button--remove" src={removeIcon} alt="" /> : 
                    <img className="card__collection-button card__collection-button--add" src={addIcon} alt="" />}
                    <span className="card__heading__title">{name}</span>
                </header>
                {!fontUrl ? <p>Sorry: {props.family} file is not avalible</p> : <p className={'card__text '+css(styles().font)}>{props.customText}</p>}
            </div>
    )
} 
 