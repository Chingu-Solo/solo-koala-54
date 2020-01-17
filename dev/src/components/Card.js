import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import './styles/Card.css';
import retrieveFontFileUrl from '../controllers/retrieveFontFileUrl';

export default function Card(props) {
    const [fontUrl, setFontUrl] = useState(false);
    const name = props.family;
    const googleFont = !fontUrl ? { fontFamily: 'inherit' } : {
        fontFamily: props.family,
        fontStyle: "normal",
        fontWeight: "normal",
        src: `url('${fontUrl}') format('truetype')`
    };
    const styles = StyleSheet.create({
        font: {
            fontFamily: [googleFont],
        }
    });
    useEffect(() => {
        retrieveFontFileUrl(name, props.files).then(url => {
            setFontUrl(url);
          });        
        }, [name, props.files]);
    return (
        <div className={'card '+css(styles.font)}> 
            <header className="card__heading" title={props.family}>
                <span className="card__heading__title">{name}</span>
            </header>
            {!fontUrl ? <p>Sorry: {props.family} file is not avalible</p> : <p className={'card__text '+css(styles.font)}>{props.customText}</p>}
        </div>
    )
} 
 