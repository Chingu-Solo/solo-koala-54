import React, { useState, useEffect } from 'react';
import Main from '../components/Main';
import Toolbar from '../components/Toolbar';

function Catalog(props) {
  const {lightTheme, setLightTheme} = props;
  const [customText, setCustomText] = useState('');
  const [fontSize, setFontSize] = useState(18);
  const [gridView, setGridView] = useState(true);
  const [collectionList, setCollectionList] = useState([]);
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
  Object.assign(collection, {list: collectionList});
  useEffect(() => {
      localStorage.setItem('collection', JSON.stringify(collectionList));
  }, [collectionList]);
  useEffect(() => {
      const storedCollection = localStorage.getItem('collection');
      if (storedCollection) {
      const list = JSON.parse(storedCollection);
      Array.isArray(list) && setCollectionList(list);
      }
  }, []);
  return (<>
        <Toolbar {...{setCustomText, customText, fontSize, setFontSize, gridView, setGridView, lightTheme, setLightTheme, setCollectionList}} />
        <Main {...{gridView, customText, collection, fontSize}} />
    </>
  );
}

export default Catalog;