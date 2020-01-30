import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './styles/Card.css';
import { useQuery } from 'react-query';
import removeIcon from '../images/removefromcollectionicon.svg';
import addIcon from '../images/addtocollectionicon.svg';
import loading from '../images/loading.gif';
import CardText from './CardText';
import retrieveFontFileUrl from '../controllers/retrieveFontFileUrl';

export default function Card(props) {
    const {font, customText, fontSize, closeCollection} = props;
    const name = font.family;
    const files = font.files;
    const {data, error} = useQuery([name, { name, files }], retrieveFontFileUrl);
    const removeFromCollection = () => {
        props.removeFromCollection(name);
    }
    const addToCollection = () => {
        props.addToCollection({font, customText, fontSize, removeFromCollection, closeCollection});
    }
    const headerTitle = `${props.isInCollection ? 'Remove' : 'Add'} ${name} ${props.isInCollection ? 'from' : 'to'} collection`;
    const addRemoveOnclick = props.isInCollection ? removeFromCollection : addToCollection;
    const styles = useMemo(() => StyleSheet.create({
        font: { fontFamily: [{
            fontFamily: props.font.family,
            src: `url('${data}') format('truetype')`
        }] }
    }), [data]);
    const makeCard = () => {
        return (
        <div className={'card '+css(styles.font)}> 
            <header role="button" aria-pressed="false" className="card__heading" title={headerTitle+(props.isInCollection? ' - in collection' : '')} onClick={addRemoveOnclick}>
            {props.isInCollection ? 
                <img className="card__collection-button card__collection-button--remove" src={removeIcon} alt="" /> : 
                <img className="card__collection-button card__collection-button--add" src={addIcon} alt="" />}
                <span className="card__heading__title">{name}</span>
            </header>
            <CardText {...{customText, font, fontSize}} />
        </div>
    )};
    return (
    <>
        { !data || error ? <div className="card"> 
                <header role="button" aria-pressed="false" className="card__heading" title={headerTitle+(props.isInCollection? ' - in collection' : '')} onClick={addRemoveOnclick}>
                    <span className="card__heading__title">{name}</span>
                </header>
                {!data ? <img src={loading} alt="loading..." /> : <p>ERROR: {error.message}</p>}
            </div> : 
            makeCard()
        }
    </>)
} 
 