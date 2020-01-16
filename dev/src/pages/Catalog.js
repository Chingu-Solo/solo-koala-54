import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Main from '../components/Main';

function Catalog(props) {
  let match = useRouteMatch(); // using path for query so queries can be bookmarked
  const {gridView, customText} = props;
  return (<>
      {props.toolbar}
      <Switch>
        <Route path={`${match.path}/:filter`}>
          <Main {...{gridView, customText}} />
        </Route>
        <Route path={match.path}>
          <Main {...{gridView, customText}} />
        </Route>
      </Switch>
    </>
  );
}

export default Catalog;