import Card from '../Card/Card.js';
import './Mountain.css';

function Mountain({ mountain }) {
    console.log(mountain)
    if (!mountain) {
      return null;
    }
  return (
    <div className='mountains-container'>
      <Card
        state={mountain.state}
        mountain={mountain.mountain}
        snippet={mountain.snippet}
        id={mountain.id}
        // key={mountain.id}
      />
    </div>
  );
}

export default Mountain;