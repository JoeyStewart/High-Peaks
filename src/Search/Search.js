import { useState } from 'react';
import './Search.css';

function Search({ searchState }) { 
  const [usState, setUSState] = useState("");
  const [description, setDescription] = useState("");

  function searchMountain(event) {
    event.preventDefault();
    const findMountain = {
      id: Date.now(),
      usState,
      description,
    };
    searchState(findMountain);
    emptyInput();
  }

  function emptyInput() {
    setUSState("");
    setDescription("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="U.S. State"
        name="state"
        value={usState}
        onChange={(event) => setUSState(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descript This"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button onClick={(event) => searchMountain(event)}>Submissive</button>
    </form>
  );
}

export default Search;