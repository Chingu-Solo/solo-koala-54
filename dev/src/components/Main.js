import React, { useEffect, useState, useRef } from 'react';
import Cards from './Cards';
import './styles/Main.css';
import { useParams } from "react-router-dom";
import CollectionOpenButton from './CollectionOpenButton';
import Collection from './Collection';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Main(props) {
    let { filter } = useParams('/:filter');
    const {fontList, searchIndex, customText, collection, gridView, fontSize} = props;
    const [showCollection, setShowCollection] = useState(false);
    const [showCollectionButton, setShowCollectionButton] = useState(false);
    const refCloseCollectionIfNavChange = useRef(filter+gridView+customText);
    const styles = () => StyleSheet.create({
        font: {
            fontSize: fontSize+'px'
        }
    });
    useEffect(() => {
        if (!showCollection && collection.list.length > 0) {
            setShowCollectionButton(true);
        }
        else {
            setShowCollectionButton(false);
        }
        if (refCloseCollectionIfNavChange.current !== filter+gridView+customText || (showCollection && collection.list.length <= 0)) {
            refCloseCollectionIfNavChange.current = filter+gridView+customText;
            setShowCollection(false);
        }

    }, [collection.list.length, showCollection, filter, gridView, customText]);
    return (
        <main className={`catalog ${showCollection ? 'collection-open' : gridView ? 'grid' : 'bar'} ${css(styles().font)}`}>
            {showCollectionButton && <CollectionOpenButton list={collection.list} showCollection={() => setShowCollection(true)}/>}
            {showCollection ? <Collection {...collection} closeCollection={() => setShowCollection(false)}/> : <Cards {...{fontList, searchIndex, customText, filter, collection, fontSize}} />}
        </main>
    );
}