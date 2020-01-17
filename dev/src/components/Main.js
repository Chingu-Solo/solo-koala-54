import React from 'react';
import Cards from './Cards';
import './styles/Main.css';
import { useParams } from "react-router-dom";

export default function Main(props) {
    let { filter } = useParams('/:filter');
    const {fontList, searchIndex, customText} = props;
    return (
        <main className={`catalog ${props.gridView ? 'grid' : 'bar'}`}>
            <Cards {...{fontList, searchIndex, customText, filter}} />
        </main>
    );
}