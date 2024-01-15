import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './Mountain.css';

function Mountain({ mountain, handleSave }) {
  if (!mountain) {
    return null;
  }

  const fullArticleText = (
    <div
      className='article-content'
      dangerouslySetInnerHTML={{ __html: mountain.snippet }}
    />
  );

  return (
    <div className='mountains-container'>
      <Card
        state={mountain.state}
        mountain={mountain.mountain}
        snippet={fullArticleText}
        id={mountain.id}
        handleSave={handleSave} 
      />
    </div>
  );
}

Mountain.propTypes = {
  mountain: PropTypes.shape({
    state: PropTypes.string.isRequired,
    mountain: PropTypes.string.isRequired,
    snippet: PropTypes.element.isRequired,
    id: PropTypes.number.isRequired,
  }),
  handleSave: PropTypes.func.isRequired,
};

export default Mountain;