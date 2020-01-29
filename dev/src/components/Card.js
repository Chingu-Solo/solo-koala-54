import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import './styles/Card.css';
import removeIcon from '../images/removefromcollectionicon.svg';
import addIcon from '../images/addtocollectionicon.svg';
import loading from '../images/loading.gif';

export default function Card(props) {
    const [fontUrl, setFontUrl] = useState(false);
    const name = props.font.family;
    const googleFont = !fontUrl ? { fontFamily: 'inherit' } : {
        fontFamily: props.font.family,
        fontStyle: "normal",
        fontWeight: "normal",
        src: `url('${fontUrl}') format('truetype')`
    };
    const styles = () => StyleSheet.create({
        font: {
            fontFamily: [googleFont],
            fontSize: props.fontSize+'px'
        },
        fontHeading: {
            fontFamily: [googleFont]
        }
    });
    const removeFromCollection = () => {
        props.removeFromCollection(name);
    }
    const addToCollection = () => {
        props.addToCollection({...props, styles: styles()});
    }
    const headerTitle = `${props.isInCollection ? 'Remove' : 'Add'} ${name} ${props.isInCollection ? 'from' : 'to'} collection`;
    const addRemoveOnclick = props.isInCollection ? removeFromCollection : addToCollection;
    useEffect(() => {
        let active = true;
        props.getFontFile.add(props.font)
                .then(url => active && setFontUrl(url))
                    .catch(err => console.log(err));  
          return () => active = false;
        }, [name, props.files]);
    return (
        <div className={'card '+css(styles.font)}> 
                <header role="button" aria-pressed="false" className="card__heading" title={headerTitle+(props.isInCollection? ' - in collection' : '')} onClick={addRemoveOnclick}>
                {props.isInCollection ? 
                    <img className="card__collection-button card__collection-button--remove" src={removeIcon} alt="" /> : 
                    <img className="card__collection-button card__collection-button--add" src={addIcon} alt="" />}
                    <span className={'card__heading__title '+css(styles().fontHeading)}>{name}</span>
                </header>
                {!fontUrl ? <img src={loading} alt="loading..." /> : <p className={'card__text '+css(styles().font)}>{
                props.customText !== '' ? props.customText : props.font.phrase}</p>}
            </div>
    )
} 
 