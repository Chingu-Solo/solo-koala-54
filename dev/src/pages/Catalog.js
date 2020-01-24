import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Main from '../components/Main';

function Catalog(props) {
  let match = useRouteMatch(); // using path for query so queries can be bookmarked
  const {fontList, searchIndex, gridView, customText, collection, fontSize} = props;
  return (<>
      {props.toolbar}
      <Switch>
        <Route path={`${match.path}:filter`}>
          <Main {...{fontList, searchIndex, gridView, customText, collection, fontSize}} />
        </Route>
        <Route path={match.path}>
          <Main {...{fontList, searchIndex, gridView, customText, collection, fontSize}} />
        </Route>
      </Switch>
    </>
  );
}

export default Catalog;