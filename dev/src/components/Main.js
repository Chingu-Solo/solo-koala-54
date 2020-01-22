import React, { useEffect, useState, useRef } from 'react';
import Cards from './Cards';
import './styles/Main.css';
import { useParams } from "react-router-dom";
import CollectionOpenButton from './CollectionOpenButton';
import Collection from './Collection';
import OnPageBottom from '../controllers/OnPageBottom';
import querySearch from '../controllers/querySearch';
import BackToTop from './BackToTop';

export default function Main(props) {
    let { filter } = useParams('/:filter');
    const {fontList, searchIndex, customText, collection, gridView, fontSize} = props;
    const [showCollection, setShowCollection] = useState(false);
    const [showCollectionButton, setShowCollectionButton] = useState(false);
    const refCloseCollectionIfNavChange = useRef(filter+gridView+customText);
    const totalCardsLoaded = useRef(20);
    const [nCards, setNCards] = useState(totalCardsLoaded.current);
    const loadMoreCards = () => {
        totalCardsLoaded.current += 20;
        setNCards(totalCardsLoaded.current);
    } 
    let currentIndex;
    if (filter) {
        currentIndex = querySearch(filter, searchIndex.current);
    }
    else {
        currentIndex = false;
    }
    const isMoreCardsToLoad = () =>  totalCardsLoaded.current < (currentIndex ? currentIndex.length : fontList.length);
    const canResetPageBottom = useRef(false);
    const handleResolveOnPageBottom = resolve => {
        const shouldKeepChecking = isMoreCardsToLoad();
        if (canResetPageBottom.current && shouldKeepChecking) {
            canResetPageBottom.current = false;
        }
        resolve(shouldKeepChecking);
    }

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
    useEffect(() => {
        canResetPageBottom.current = true;
    });
    return (
        <main className={`catalog ${showCollection ? 'collection-open' : gridView ? 'grid' : 'bar'}`}>
            {showCollectionButton && <CollectionOpenButton list={collection.list} showCollection={() => setShowCollection(true)}/>}
            <BackToTop/>
            {showCollection ? <Collection {...collection} closeCollection={() => setShowCollection(false)}/> : <Cards {...{fontList, searchIndex, customText, filter, currentIndex, collection, fontSize, number: nCards}} />}
            {fontList.length > 0 && <OnPageBottom exec={loadMoreCards} callback={handleResolveOnPageBottom} />}
        </main>
    );
}