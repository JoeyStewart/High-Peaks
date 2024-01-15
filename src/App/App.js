import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain.js';
import SavedArticles from '../Saved/SavedMountains.js';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import stateData from '../Data/Data.js';
import peakData from '../Data/peakData.js';
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
    console.log('saving');
    const article = {
      state,
      mountain,
      snippet,
      id,
    };
    saveArticle(article);
  };

  const searchState = async (newSearchState) => {
    const searchString = newSearchState.toString().toLowerCase();
  
    const dataObject = stateData.find(
      (mountain) => mountain.state.toLowerCase() === searchString
    );
  
    if (!dataObject) {
      alert("Please enter a valid U.S. state for the search.");
      return;
    }
  
    const matchingPeak = dataObject.mountain;

    if (matchingPeak) {
      try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=${matchingPeak}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        const matchingResult = searchData.query.search[0];

        if (matchingResult) {
          const pageID = matchingResult.pageid;
          const articleUrl = `https://en.wikipedia.org/w/api.php?action=parse&pageid=${pageID}&format=json&origin=*`;
          const articleResponse = await fetch(articleUrl);
          const articleData = await articleResponse.json();
        
          setMountain({
            id: pageID,
            state: newSearchState,
            mountain: matchingResult.title,
            snippet: articleData.parse.text['*'],
          });
          setShowCard(true);
          navigate(`/peaks/${matchingPeak}`);
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

  const loadArticleAndNavigate = async () => {
    await onLoadArticle();
    navigate('/');
  };

  useEffect(() => {
    loadArticleAndNavigate();
  }, []);

return (
  <main className='App'>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Sen&display=swap" rel="stylesheet"></link>
    <div className="header">
      <h1 className="high-peaks">High Peaks</h1>
      <Search searchState={searchState} />
      <div className="nav-container">
        <div className="nav-item">
          <Link className="saved-articles" to='/saved'>Saved Articles</Link>
        </div>
        <div className="nav-item">
          <Link className="home" to='/' onClick={loadArticleAndNavigate}>
            Home
          </Link>
        </div>
      </div>
    </div>
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




