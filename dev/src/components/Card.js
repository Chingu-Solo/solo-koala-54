import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

export default function Card(props) {

    let googleFont;
    let styles = StyleSheet.create({
        font: {
            fontSize: 20
        }
    });
    const [customText, setCustomText] = useState(false);
    
    useEffect(() => {
        const varient = props.files.hasOwnProperty('regular') ? 'regular' : props.files.hasOwnProperty('400') ? '400' : Object.keys(props.files)[0]; // fallbacks
        const url = props.files[varient]; 
        const method = 'GET';

        axios.request({url, method, responseType: 'blob'})
        .then(({ data }) => {
            const fontFile = new File([data], props.family+'.ttf');
            const fontURL = URL.createObjectURL(fontFile);
            googleFont = {
                fontFamily: props.family,
                fontStyle: "normal",
                fontWeight: "normal",
                src: `url('${fontURL}') format('truetype')`
            };
            styles = StyleSheet.create({
                font: {
                    fontFamily: [googleFont],
                    fontSize: 20
                }
            });
            setCustomText(<p className={css(styles.font)}>{props.customText}</p>);
          });

            
        }, [])

    return (
        <div> 
            <h3>{props.family}</h3>
            <h4>{props.category}</h4>
            {customText ? customText : <p>loading</p>}
        </div>
    )
} 
 