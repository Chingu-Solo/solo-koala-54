import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import './styles/Card.css';
import retrieveFontFileUrl from '../controllers/retrieveFontFileUrl';
import removeIcon from '../images/removefromcollectionicon.svg';
import addIcon from '../images/addtocollectionicon.svg';
import customTextGenerator from '../controllers/customTextGenerator';
import loading from '../images/loading.gif';

const getPhrase = customTextGenerator(80);

export default function Card(props) {
    const [defaultText, setDefaultText] = useState('')
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
        retrieveFontFileUrl(name, props.files).then(url => {
            active && setFontUrl(url);
            let phrase = getPhrase.next().value;
            let count = 0;
            while (phrase.length < 70) {
                phrase = getPhrase.next().value;
                if (count++ > 10) {
                    phrase = 'default text';
                    break;
                }
            }
            setDefaultText(phrase);
        });        
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
                props.customText !== '' ? props.customText : defaultText}</p>}
            </div>
    )
} 
 