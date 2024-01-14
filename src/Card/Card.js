import './Card.css';
import PropTypes from 'prop-types';

function Card({ state, snippet, mountain, handleSave, id }) {
  console.log('Props received in Card:', { state, snippet, mountain, handleSave, id });
console.log(handleSave)
  return (
    <div className='card'>
      <button onClick={()=>handleSave(state, mountain, snippet, id)}>Save</button>
      <h2>{state}</h2>
      <h3>{mountain}</h3>
      <p>{snippet}</p>
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
