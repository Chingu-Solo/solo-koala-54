import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function CardText(props) {
    const styles = useMemo(() => StyleSheet.create({
        size: {
            fontSize: props.fontSize+'px'
        }
    }), [props.fontSize]);
    return (
        <p className={'card__text '+css(styles.size)}>{props.customText !== '' ? props.customText : props.font.phrase}</p>
    )
}