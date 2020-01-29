import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Main from '../components/Main';
import Toolbar from '../components/Toolbar';

function Catalog(props) {
  let match = useRouteMatch(); // using path for query so queries can be bookmarked
  const {fontList, searchIndex, gridView, customText, collection, fontSize} = props;
  return (<>
        <Toolbar {...{setCustomText, customText, fontSize, setFontSize, gridView, setGridView, lightTheme, setLightTheme, setCollectionList}} />
    </>
  );
}

export default Catalog;