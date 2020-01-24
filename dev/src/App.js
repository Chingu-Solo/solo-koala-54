import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/* controllers */
import fetchFonts from './controllers/fetchFonts';
import buildSearchIndex from './controllers/buildSearchIndex';
import assignPhraseToEachFont from './controllers/assignPhraseToEachFont';

/* components */
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

/* pages */
import Catalog from './pages/Catalog';
import Featured from './pages/Featured';
import Articles from './pages/Articles';
import About from './pages/About';

export default function App() {
  const [customText, setCustomText] = useState('');
  const [fontSize, setFontSize] = useState(18);
  const [gridView, setGridView] = useState(true);
  const [lightTheme, setLightTheme] = useState(true);
  const [collectionList, setCollectionList] = useState([]);
  const toolbar = <Toolbar {...{setCustomText, customText, fontSize, setFontSize, gridView, setGridView, lightTheme, setLightTheme, setCollectionList}} />;
  const [fontList, setFontList] = useState([]);
  const getCollectionIndex = name => collectionList.findIndex(font => font.family === name);
  const collection = {
    addToCollection: font => setCollectionList([...collectionList, font]),
    removeFromCollection: name => {
      const index = getCollectionIndex(name);
      if (index >= 0) {
        const tempList = [...collectionList];
        tempList.splice(index, 1);
        setCollectionList(tempList);
      }
      else {
        console.error(`Tried removing ${name} from collection but it's not here: ${collectionList.map(font => font.family)}`);
      }
    }
  }
  let searchIndex = useRef([]);
    useEffect(() => {
      const storedCollection = localStorage.getItem('collection');
      fetchFonts().then(fonts => {
        buildSearchIndex(fonts).then(index => {
          assignPhraseToEachFont(fonts).then(fonts => {
            searchIndex.current = index;
            setFontList(fonts);
            storedCollection && setCollectionList(JSON.parse(storedCollection));
          });
        });
      });
      return () => {
        setFontList(null);
        setCollectionList(null);
      }
  }, []);
  useEffect(() => {
    localStorage.setItem('collection', JSON.stringify(collectionList));
  }, [collectionList]);
  return (
    <div className={'app '+(lightTheme ? 'light' : 'dark')}>
      <BrowserRouter basename="/solo-koala-54">
          <Header/>
          <Switch>
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
              <Catalog {...{fontList, searchIndex, customText, toolbar, fontSize, gridView, collection:{...collection, list: collectionList}}}/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}