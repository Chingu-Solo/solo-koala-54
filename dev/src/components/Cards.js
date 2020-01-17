import React from 'react';
import Card from '../components/Card';
import querySearch from '../controllers/querySearch';

export default function Cards(props) {
    const makeCards = () => {
        if (!props.fontList || props.fontList.length < 1) {
            return <p>no fonts to load :S</p>
        }
        let nCards = props.hasOwnProperty('number') ? props.number : 20; // load 20 cards if number unspecified
        let currentIndex = 'linear';
        if (props.filter) {
            currentIndex = querySearch(props.filter, props.searchIndex.current);
            if (currentIndex.length < 1) {
                return <p>No matching fonts on search <q>{props.filter}</q></p>
            }
        }
        let cards = [];
        for (let i=0;i<nCards;i++) {
            let index = currentIndex === 'linear' ? i : currentIndex[i];
            if (!Number.isInteger(index) || index > props.fontList.length - 1) {
                cards.push(<p key={'end-of-results-message'}>End of results</p>);
                break;
            }
            cards.push(<Card key={props.fontList[index].family} customText={props.customText} {...props.fontList[index]}/>);
        }  
        return cards
    }
    return makeCards()
}