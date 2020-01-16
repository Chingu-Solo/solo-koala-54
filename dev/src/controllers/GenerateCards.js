import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import fetchFonts from '../controllers/fetchFonts';
import buildSearchIndex from '../controllers/buildSearchIndex';
import querySearch from './querySearch';

export default function GenerateCards(props) {
    const data = {
        loadNResults: 20,
        fontList: [],
        searchIndex: []
    }
    const [cards, setCards] = useState(<p>no fonts to load :S</p>);
    const makeCards = () => {
        let nCards = props.hasOwnProperty('number') ? props.number : data.loadNResults;
        let currentIndex = 'linear';
        if (props.filter) {
            currentIndex = querySearch(props.filter, data.searchIndex);
            if (currentIndex.length < 1) {
                return <p>No matching fonts on search <q>{props.filter}</q></p>
            }
        }
        let cards = [];
        for (let i=0;i<nCards;i++) {
            let index = currentIndex === 'linear' ? i : currentIndex[i];
            if (!Number.isInteger(index) || index > data.fontList.length - 1) {
                cards.push(<p key={'end-of-results-message'}>End of results</p>);
                break;
            }
            cards.push(<Card key={data.fontList[index].family} customText={props.customText} {...data.fontList[index]}/>);
            // download font and add to dom?
        }  
        return cards
    }
    useEffect(() => {
        if (data.fontList.length < 1) {
            // check localstoage for stored fontlist
            let fontListLastStored = localStorage.getItem('fontlistlaststored');
            let storedFontList = localStorage.getItem('fontlist');
            if (storedFontList && storedFontList.length > 0 && fontListLastStored !== null && Date.now() - parseInt(fontListLastStored) < ((1000*60*60)*6)) { // data stored within last 6 hours
               data.fontList = JSON.parse(storedFontList);
               buildSearchIndex(data.fontList).then(index => {
                data.searchIndex = index;
                setCards(makeCards());
               });
            }
            else {
                fetchFonts().then(fonts => {
                    data.fontList = fonts.items;
                    buildSearchIndex(data.fontList).then(index => {
                    data.searchIndex = index;
                    setCards(makeCards());
                    });
                });
            }
            // on cleanup localstore current fontlist
            return function cleanup() { 
                localStorage.setItem('fontlistlaststored', Date.now().toString());
                localStorage.setItem('fontlist', JSON.stringify(data.fontList));
            }
        }
        else {
            setCards(makeCards());
        }
    }, [props.filter]); 
    return cards
}