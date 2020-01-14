import React, {useState} from 'react';
import {
    useRouteMatch,
    Redirect
} from "react-router-dom";


export default function Nav(props) {
    const [query, setQuery] = useState('');
    let match = useRouteMatch();
    let [withRedirect, setWithRedirect] = useState(false);
    const search = event => {
        setWithRedirect(true);
        setQuery(event.target.value);
    }
    return (
        <nav>
            <div>Search: <input type="text" onChange={search} /></div>
            {withRedirect && <Redirect to={`${match.path}catalog/${query}`}/>}
        </nav>
    )
}