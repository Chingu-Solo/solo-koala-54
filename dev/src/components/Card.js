import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import axios from 'axios';
import './styles/Card.css';

export default function Card(props) {
    const [fontText, setfontText] = useState(false);
    useEffect(() => {
        const varient = props.files.hasOwnProperty('regular') ? 'regular' : props.files.hasOwnProperty('400') ? '400' : Object.keys(props.files)[0]; // fallbacks
        const url = props.files[varient]; 
        const method = 'GET';
        const name = props.family;
        axios.request({url, method, responseType: 'blob'})
        .then(({ data }) => {
            const fontFile = new File([data], props.family+'.ttf');
            const fontURL = URL.createObjectURL(fontFile);
            const googleFont = {
                fontFamily: props.family,
                fontStyle: "normal",
                fontWeight: "normal",
                src: `url('${fontURL}') format('truetype')`
            };
            const styles = StyleSheet.create({
                font: {
                    fontFamily: [googleFont],
                }
            });
            setfontText(<div className={'card '+css(styles.font)}> 
            <header className="card__heading" title={props.family}>
                <span className="card__heading__title">{name}</span>
            </header>
            <p className={'card__text '+css(styles.font)}>{props.customText}</p>
        </div>);
          });        
        }, [props.customText, props.family, props.files]);
    return (
        fontText
    )
} 
 