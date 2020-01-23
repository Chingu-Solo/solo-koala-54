import React, { useState, useEffect, useRef } from 'react';
import wiggerlyLine from '../images/wiggerlyline.svg';
import { StyleSheet, css } from 'aphrodite/no-important';
import retrieveFontFileUrl from '../controllers/retrieveFontFileUrl';
import './styles/CollectionOpenButton.css';

export default function CollectionOpenButton(props) {
    const firstTimeLoading = useRef(true);
    const blankLines = () => {
        const arr = [];
        for (let l=props.list.length;l<3;l++) {
            arr.push(<div key={'listBlank'+l}>{l+1}. <img src={wiggerlyLine} alt="" /></div>)
        }
        return arr
    }
    const [fontUrls, setFontUrls] = useState({});
    const styles = {};
    props.list.forEach(font => {
        if (firstTimeLoading.current) {
            firstTimeLoading.current = false;
            const googleFont = !fontUrls.hasOwnProperty(font.family) ? { fontFamily: 'inherit' } : {
                fontFamily: font.family,
                src: `url('${fontUrls[font.family]}') format('truetype')`
            };
            styles[font.family] = StyleSheet.create({font: {fontFamily: [googleFont]} });
        }
        else {
            styles[font.family] = StyleSheet.create({font: {fontFamily: font.family} });
        }
    });
    const fontsInCollection = () => props.list.map((font, i, arr) => (arr.length-i <= 3) ? <div key={font.family+'collectionList'} className={font.hasOwnProperty('styles') ? css(styles[font.family].font) : ''}>{i+1}. {font.family}</div> : false).filter(font => font);
    useEffect(() => {
        if (firstTimeLoading.current) {
            const urls = {};
            Promise.all(props.list.map(font => retrieveFontFileUrl(font.family, font.files)
                    .then(url => {
                        urls[font.family] = url;
                    })
                ))
                .then(() => setFontUrls(urls));   
        } 
    }, [props.list]);
    return (
        <div className="collection-open-button" onClick={props.showCollection}>
            <h4 className="collection-open-button__title">Collection</h4>
            <ol className="collection-open-button__list" start={props.list.length >= 3 ? props.list.length-2 : 1}>
                {fontsInCollection()}
                {blankLines()}
                ...
            </ol>
        </div>
    )
}