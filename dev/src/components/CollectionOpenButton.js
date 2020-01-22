import React from 'react';
import wiggerlyLine from '../images/wiggerlyline.svg';
import { css } from 'aphrodite/no-important';
import './styles/CollectionOpenButton.css';

export default function CollectionOpenButton(props) {
    const blankLines = () => {
        const arr = [];
        for (let l=props.list.length;l<3;l++) {
            arr.push(<div key={'listBlank'+l}>{l+1}. <img src={wiggerlyLine} alt="" /></div>)
        }
        return arr
    }
    const fontsInCollection = () => props.list.map((font, i, arr) => (arr.length-i <= 3) ? <div key={font.family+'collectionList'} className={font.hasOwnProperty('styles') ? css(font.styles.fontHeading) : ''}>{i+1}. {font.family}</div> : false).filter(font => font);
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