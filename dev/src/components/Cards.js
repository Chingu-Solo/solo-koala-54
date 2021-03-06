import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useQuery } from 'react-query';
import fetchFonts from '../controllers/fetchFonts';
import querySearch from '../controllers/querySearch';
import OnPageBottom from '../controllers/OnPageBottom';
import loading from '../images/loading.gif';
import LazyLoad from 'react-lazyload';

export default function Cards(props) {
    const {filter, customText, collection, fontSize} = props;
    const {data, error} = useQuery('fontList', fetchFonts);
    let fontList = [];
    let currentIndex = [];
    let [nCards, setNCards] = useState(20);
    const isMoreCards = () => (currentIndex.length > 0 ? currentIndex.length : fontList.length) > nCards;
    const makeCards = () => {
        fontList = data;
        if (filter !== '') {
            currentIndex = querySearch(filter, fontList);
        }
        else {
            currentIndex = [];
        }
        if (!fontList || fontList.length < 1) {
            return <p>no fonts to load :S</p>
        }
        if (filter && currentIndex.length < 1) {
            return <p>No matching fonts on search <q>{filter}</q></p>
        }
        let newCards = [];
        for (let i=0;i<nCards;i++) {
            let index = !currentIndex ? i : currentIndex[i];
            let font = fontList[index];
            if (!Number.isInteger(index) || index > fontList.length - 1) {
                newCards.push(<p key={'end-of-results-message'}>End of results</p>);
                break;
            }
            else {
                let inCollection = collection.list.map(f => f.font.family).includes(font.family);
                newCards.push(<LazyLoad key={font.family+'card'} once ><Card 
                    {...{font, ...collection, customText, fontSize}} 
                    isInCollection={inCollection}
                /></LazyLoad>);
            }
            
        }  
        return newCards;
    }
    useEffect(() => {
        setNCards(20);
    }, [filter]);
    return (<>
        {!data ? 
        <img src={loading} alt="loading..." /> : error ? 
        <p>Error: {error.message}</p> : <>
         {makeCards()}
         <OnPageBottom {...{setNCards, nCards, isMoreCards}} />
         </>}
  
    </>)
}