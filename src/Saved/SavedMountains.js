import React from 'react';
import Card from '../Card/Card';

function SavedArticles({ savedArticles }) {
    return (
      <div>
        <h1>Favorite Mountains</h1>
        {savedArticles.map((article) => (
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

export default SavedArticles