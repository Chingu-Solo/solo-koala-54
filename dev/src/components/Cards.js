import React from 'react';
import Card from '../components/Card';
import { useQuery } from 'react-query';
import fetchFonts from '../controllers/fetchFonts';
import loading from '../images/loading.gif';


export default function Cards(props) {
    const {number, filter, currentIndex, customText, collection, fontSize} = props;
    const {data, error} = useQuery('fontList', fetchFonts);
    const makeCards = () => {
        const fontList = data;
        if (!fontList || fontList.length < 1) {
            return <p>no fonts to load :S</p>
        }
        let nCards = Number.isInteger(number) ? number : 20; // load 20 cards if number unspecified
        if (filter && currentIndex.length < 1) {
            return <p>No matching fonts on search <q>{filter}</q></p>
        }
        let cards = [];
        for (let i=0;i<nCards;i++) {
            let index = !currentIndex ? i : currentIndex[i];
            let font = fontList[index];
            if (!Number.isInteger(index) || index > fontList.length - 1) {
                cards.push(<p key={'end-of-results-message'}>End of results</p>);
                break;
            }
            else {
                let inCollection = collection.list.map(f => f.hasOwnProperty('family') && f.family).includes(font.family);
                cards.push(<Card 
                    key={font.family+'card'} 
                    {...{...font, ...collection, customText, fontSize}} 
                    isInCollection={inCollection}
                />);
            }
            
        }  
        return cards
    }
    return !data ? 
        <img src={loading} alt="loading..." /> : error ? 
        <p>Error: {error.message}</p> : makeCards();
}