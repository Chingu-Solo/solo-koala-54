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
import Footer from './components/Footer';

/* pages */
import Catalog from './pages/Catalog';
import Featured from './pages/Featured';
import Articles from './pages/Articles';
import About from './pages/About';

export default function App() {
  const [customText, setCustomText] = useState('default text');
  const [fontSize, setFontSize] = useState(18);
  const [gridView, setGridView] = useState(true);
  const [lightTheme, setLightTheme] = useState(true);
  const toolbar = <Nav {...{setCustomText, fontSize, setFontSize, gridView, setGridView, lightTheme, setLightTheme}} />;
  return (
    <div className={'app '+(lightTheme ? 'light' : 'dark')}>
      <Router>
          <Header/>
          <Switch>
            <Route path="/catalog">
              <Catalog {...{customText, toolbar, fontSize, gridView}}/>
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
          <Footer/>
      </Router>
    </div>
  );
}