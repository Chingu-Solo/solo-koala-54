import React, { useEffect } from 'react';
// import QueryFonts from '../controllers/QueryFonts';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import QueryFonts from '../controllers/QueryFonts';

function Catalog(props) {
  let match = useRouteMatch(); // using path for query so queries can be bookmarked
  const makeMoreCards = () => {};
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:filter`}>
          <QueryFonts />
        </Route>
        <Route path={match.path}>
          {props.cards}
        </Route>
      </Switch>
    </div>
  );
}

export default Catalog;