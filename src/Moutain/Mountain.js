
import React from 'react';
import Card from '../Card/Card.js';
import './Mountain.css';

function Mountain({ mountain, saveArticle }) {
  if (!mountain) {
    return null;
  }

  const extractTextFromHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const fullArticleText = extractTextFromHtml(mountain.snippet);

  return (
    <div className='mountains-container'>
      <Card
        state={mountain.state}
        mountain={mountain.mountain}
        snippet={fullArticleText}
        id={mountain.id}
        saveArticle={saveArticle}
      />
    </div>
  );
}

export default Mountain;