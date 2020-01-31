import React, { useEffect, useState, useRef } from 'react';
import Cards from './Cards';
import './styles/Main.css';
import { useRouteMatch } from "react-router-dom";
import CollectionOpenButton from './CollectionOpenButton';
import Collection from './Collection';
import BackToTop from './BackToTop';
import { ReactQueryConfigProvider } from 'react-query'

export default function Main(props) {
    const match = useRouteMatch('/:filter'); // using path for query so queries can be bookmarked
    let filter = match ? match.params.filter : undefined;
    const {customText, gridView, fontSize, collection} = props;
    const [showCollection, setShowCollection] = useState(false);
    const [showCollectionButton, setShowCollectionButton] = useState(false);
    const refCloseCollectionIfNavChange = useRef(filter+gridView+customText);
    const queryConfig = { 
        refetchAllOnWindowFocus: false,
        staleTime: 60 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
    };
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
        return () => {
            setShowCollectionButton(null);
            if (refCloseCollectionIfNavChange.current !== filter+gridView+customText || (showCollection && collection.list.length <= 0)) {
                refCloseCollectionIfNavChange.current = filter+gridView+customText;
                setShowCollection(null);
            }
        }
    }, [collection.list.length, showCollection, filter, gridView, customText]);
    return (
        <main className={`catalog ${showCollection ? 'collection-open' : gridView ? 'grid' : 'bar'}`}>
            {showCollectionButton && <CollectionOpenButton list={collection.list} showCollection={() => setShowCollection(true)}/>}
            <BackToTop/>
            {showCollection ? <Collection {...collection} closeCollection={() => setShowCollection(false)}/> : 
            <ReactQueryConfigProvider config={queryConfig}>
                <Cards {...{customText, filter, collection, fontSize}} />
            </ReactQueryConfigProvider>}
        </main>
    );
}