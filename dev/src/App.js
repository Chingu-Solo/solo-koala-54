import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

/* components */
import Header from './components/Header';
import Footer from './components/Footer';

/* pages */
import Catalog from './pages/Catalog';
import Featured from './pages/Featured';
import Articles from './pages/Articles';
import About from './pages/About';

export default function App() {
  const [lightTheme, setLightTheme] = useState(true);
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
              <Catalog {...{lightTheme, setLightTheme}}/>
            </Route>
          </Switch>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}