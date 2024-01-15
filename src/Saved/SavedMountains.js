import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

function SavedArticles({ savedMountains }) {

  return (
    <div>
      <h1 class="fav">Favorite Mountains</h1>
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

SavedArticles.propTypes = {
  savedMountains: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      mountain: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired,
    })
  ),
};


export default SavedArticles;