import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



/* components */
import Header from './components/Header';
import Nav from './components/Nav';

/* pages */
import Catalog from './pages/Catalog';
import Featured from './pages/Featured';
import Articles from './pages/Articles';
import About from './pages/About';

export default function App() {
  const [customText, setCustomText] = useState('default text');
  return (
    <Router>
      <div>
        <Header/>
        <Nav setCustomText={setCustomText} />
        <Switch>
          <Route path="/catalog">
            <Catalog customText={customText}/>
          </Route>
          <Route path="/Featured">
            <Featured />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Redirect to="/catalog" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}