import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain.js';
import SavedArticles from '../Saved/SavedMountains.js'; 
import { Routes, Route, Link, useLocation, useNavigate  } from 'react-router-dom';
import stateData from '../Data/Data.js';
import peakData from '../Data/peakData.js';
import Card from '../Card/Card.js';
import './App.css';

function App() {
  const [mountain, setMountain] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [savedMountains, setSavedMountains] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  
  const saveArticle = (article) => {
    setSavedMountains([...savedMountains, article]);
  };
  
  const handleSave = (state, mountain, snippet, id) => {
    console.log("saving")
    const article = {
      state,
      mountain,
      snippet,
      id,
    };
    saveArticle(article);
  };

console.log(handleSave)
  const searchState = async (newSearchState) => {
    const searchString = newSearchState.toString().toLowerCase();

    const dataObject = stateData.find(
      (mountain) => mountain.state.toLowerCase() === searchString
    );

    const matchingPeak = dataObject ? dataObject.mountain : null;

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
          navigate(`/peaks/${matchingPeak}`);

          setShowCard(true);
        } else {
          setMountain(null);
          setShowCard(false);
          console.warn('No matching result found for the search state.');
        }
      } catch (error) {
        console.error('There was an error fetching data:', error);
        setMountain(null);
        setShowCard(false);
      }
    } else {
      setMountain(null);
      setShowCard(false);
    }
  };

  const onLoadArticle = async () => {
    if (peakData.title) {
      try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=${peakData.title}`;
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
            state: peakData.title,
            mountain: matchingResult.title,
            snippet: articleData.parse.text['*'],
          });
          setShowCard(true);
        } else {
          setMountain(null);
          setShowCard(false);
          console.warn('No matching result found for the peakData title.');
        }
      } catch (error) {
        console.error('There was an error fetching data:', error);
        setMountain(null);
        setShowCard(false);
      }
    }
  };

  useEffect(() => {
    onLoadArticle();
  }, []);

  
  return (
    <main className='App'>
      <h1>High Peaks</h1>
      <Search searchState={searchState}/>
      <nav>
        <Link to='/saved'>Saved Articles_</Link>
        <Link to='/'>Home</Link>
      </nav>
      <Routes>
        <Route
          path='/saved'
          element={
            location.pathname === '/saved' ? (
              <SavedArticles savedMountains={savedMountains} />
            ) : null
          }
        />
      </Routes>
      {showCard && location.pathname !== '/saved' && mountain && (
        <div className='mountains-container'>
          <Mountain mountain={mountain} handleSave={handleSave} />
        </div>
      )}
    </main>
  );
}

export default App;