import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/* controllers */
import fetchFonts from './controllers/fetchFonts';
import buildFontIndex from './controllers/buildFontIndex';

/* components */
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';

/* pages */
import Catalog from './pages/Catalog';
import Featured from './pages/Featured';
import Articles from './pages/Articles';
import About from './pages/About';

export default function App() {
  let fontList = [];
  let fontIndex = {};
    const makeCards = (startingIndex, nCards = startingIndex+20) => {
    let cards = [];
    for (let i=startingIndex;i<nCards;i++) {
      cards.push(<Card key={fontList[i].family} {...fontList[i]}/>);
    }
    setCards(cards);
  }
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchFonts().then(fonts => {
      fontList = fonts.items;
      buildFontIndex(fontList).then(index => {
        fontIndex = index;
        makeCards(0);
      });
    });
  }, []);
  return (
    <Router>
      <div>
        <Header/>
        <Nav index={fontIndex} />
        <Switch>
          <Route path="/catalog">
            <Catalog cards={cards} />
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