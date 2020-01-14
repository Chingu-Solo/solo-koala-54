import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import GenerateCards from '../controllers/GenerateCards';

function Catalog(props) {
  let match = useRouteMatch(); // using path for query so queries can be bookmarked
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:filter`}>
           <GenerateCards />
        </Route>
        <Route path={match.path}>
          <GenerateCards />
        </Route>
      </Switch>
    </div>
  );
}

export default Catalog;