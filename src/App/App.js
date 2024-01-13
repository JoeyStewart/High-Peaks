import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain.js'
import savedArticles from '../Saved/SavedMountains.js';
import {Routes, Route, Link } from 'react-router-dom';
import stateData from '../Data/Data.js';
import './App.css';

function App() {

  const [mountain, setMountain] = useState(null);
  const [savedMountains, setSavedMountains] = useState([]);

  function saveArticle(article) {
    setSavedMountains([...savedMountains, article]);
  }

  async function searchState(newSearchState) {
    console.log(newSearchState);
    const searchString = newSearchState.toString().toLowerCase();
    console.log(searchString);
    const dataObject = stateData.find(mountain => mountain.state.toLowerCase() === searchString);
    console.log(dataObject);
    const matchingPeak = dataObject ? dataObject.mountain : null;
    console.log(matchingPeak);

  
    if (matchingPeak) {
      try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=${matchingPeak}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        const matchingResult = searchData.query.search[0];

        if (matchingResult) {
          const pageId = matchingResult.pageid;
          const articleUrl = `https://en.wikipedia.org/w/api.php?action=parse&pageid=${pageId}&format=json&origin=*`;
          const articleResponse = await fetch(articleUrl);
          const articleData = await articleResponse.json();

          setMountain({
            id: pageId,
            state: newSearchState,
            mountain: matchingResult.title,
            snippet: articleData.parse.text['*'],
          });
        } else {
          setMountain(null);
        }
      } catch (error) {
        console.error('There was an error fetching data:', error);
      }
    } else {
      setMountain(null);
    }
  }

  return (
    <Routes>
      <main className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/saved'>Saved Articles</Link>
        </nav>
        <h1>High Peaks</h1>
        <Route exact path='/'>
          <div>
            <Search searchState={searchState} />
            <Mountain mountain={mountain} saveArticle={saveArticle} />
          </div>
        </Route>
        <Route path='/saved'>
          <savedArticles savedArticles={savedArticles} />
        </Route>
      </main>
    </Routes>
  );
}

export default App;
