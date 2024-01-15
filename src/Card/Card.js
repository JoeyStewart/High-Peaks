import React, { useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({ state, snippet, mountain, handleSave, id }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <h2>{state}</h2>
      <h3>{mountain}</h3>
      {isExpanded && <p className="expanded-content">{snippet}</p>}
      <p className="read-article-text">Click Card to Read Article</p>
      <button className="save-button" onClick={() => handleSave(state, mountain, snippet, id)}>
        Save
      </button>
    </div>
  );
}

Card.propTypes = {
  state: PropTypes.string.isRequired,
  snippet: PropTypes.element.isRequired,
  mountain: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default Card;
