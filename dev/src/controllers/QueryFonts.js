import React from 'react';
import {
    useParams
  } from "react-router-dom";

function QueryFonts() {
    let { filter } = useParams();
    return (<>
        <h3>Font search: {filter}</h3>
        <h3>TODO: return font cards</h3>
    </>);
  }

export default QueryFonts;