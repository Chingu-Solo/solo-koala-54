import React from 'react';

export default function Card(props) {
    console.log(props);
    return (
        <div>
            <h3>{props.family}</h3>
            <h4>{props.category}</h4>
        </div>
    )
}