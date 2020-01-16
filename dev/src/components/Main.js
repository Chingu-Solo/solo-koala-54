import React from 'react';
import GenerateCards from '../controllers/GenerateCards';
import './styles/Main.css';
import { useParams } from "react-router-dom";

export default function Main(props) {
    let { filter } = useParams('/:filter');
    return (
        <main className={`catalog ${props.gridView ? 'grid' : 'bar'}`}>
            <GenerateCards customText={props.customText} filter={filter} />
        </main>
    );
}