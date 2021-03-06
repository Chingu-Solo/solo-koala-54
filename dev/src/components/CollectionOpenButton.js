import React, { useState, useEffect, useRef, createRef } from 'react';
import wiggerlyLine from '../images/wiggerlyline.svg';
import { StyleSheet, css } from 'aphrodite/no-important';
import './styles/CollectionOpenButton.css';
const retrieveFontFileUrl = () => import('../controllers/retrieveFontFileUrl');

export default function CollectionOpenButton(props) {
    const {showCollection, list} = props;
    const firstTimeLoading = useRef(true);
    const blankLines = () => {
        const arr = [];
        for (let l=list.length;l<3;l++) {
            arr.push(<div key={'listBlank'+l}>{l+1}. <img src={wiggerlyLine} alt="" /></div>)
        }
        return arr
    }
    const [fontUrls, setFontUrls] = useState({});
    const styles = {};
    list.forEach(item => {
        const font = item.font;
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
    const fontsInCollection = () => list.map((item, i, arr) => (arr.length-i <= 3) ? <div key={item.font.family+'collectionList'} className={css(styles[item.font.family].font)}>{i+1}. {item.font.family}</div> : false).filter(font => font);
    
    const lastListLength = useRef(0);
    const menuButton = createRef(null);

    useEffect(() => {
        if (firstTimeLoading.current) {
            const urls = {};
            Promise.all(list.map(item => retrieveFontFileUrl(item.font.family, item.font.files)
                    .then(url => {
                        urls[item.font.family] = url;
                    })
                    .catch(err => console.error(err))
                ))
                .then(() => setFontUrls(urls))
                .catch(err => console.error(err));   
        } 
        if (menuButton.current && list.length !== 0 && list.length !== lastListLength.current) {
            lastListLength.current = list.length;
            menuButton.current.classList.toggle('show');
            setTimeout(() => menuButton.current && menuButton.current.classList.toggle('show'), 750);
        }
        return () => menuButton.current = null;
    }, [list]);
    return (
            <div ref={menuButton} className="collection-open-button" onClick={showCollection}>
                <h4 className="collection-open-button__title">Collection</h4>
                <ol className="collection-open-button__list" start={list.length >= 3 ? list.length-2 : 1}>
                    {fontsInCollection()}
                    {blankLines()}
                    ...
                </ol>
            </div>
    )
}