import React from 'react';
import Card from '../Card/Card';

function SavedArticles({ savedMountains }) {
  console.log(savedMountains)
  return (
    <div>
      <h1>Favorite Mountains</h1>
      {savedMountains.map((article) => (
        <Card
          key={article.id}
          state={article.state}
          mountain={article.mountain}
          snippet={article.snippet}
        />
      ))}
    </div>
  );
}

export default SavedArticles;