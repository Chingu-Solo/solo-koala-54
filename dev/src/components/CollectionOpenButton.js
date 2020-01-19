import React from 'react';
import wiggerlyLine from '../images/wiggerlyline.svg';
import { css } from 'aphrodite/no-important';

export default function CollectionOpenButton(props) {
    const blankLines = () => {
        for (let l=0;l<6-props.inCollection.length;l++) {
            return <li><img src={wiggerlyLine} alt="" /></li>
        }
    }
    const fontsInCollection = () => props.inCollection.map(font => <li className={css(props.styles.font)}>{font.family}</li>);
    return (
        <button onClick={props.showCollection}>
            <ol>
                {fontsInCollection()}
                {blankLines()}
            </ol>
        </button>
    )
}