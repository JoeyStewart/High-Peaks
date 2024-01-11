import { useState } from 'react';
import './Search.css';

function Search({ searchState }) { 
  const [usState, setUSState] = useState("");

  function searchMountain(event) {
    event.preventDefault();
    const findMountain = {
      id: Date.now(),
      usState,
    };
    searchState(findMountain);
    emptyInput();
  }

  function emptyInput() {
    setUSState("");
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
      <button onClick={(event) => searchMountain(event)}>Search</button>
    </form>
  );
}

export default Search;