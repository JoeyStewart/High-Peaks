import { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ searchState }) {
  const [usState, setUSState] = useState("");

  async function searchMountain(event) {
    event.preventDefault();
    const findMountain = {
        mountain: usState, 
    };
    console.log(findMountain.mountain)
    try {
      const matchingPeak = await searchState(findMountain.mountain);
      console.log("Matching Peak:", matchingPeak);
    } catch (error) {
      console.error("Search operation failed:", error);
    }

    emptyInput();
  }

  function emptyInput() {
    setUSState("");
  }

  return (
    <form>
      <input
        type="search"
        placeholder="U.S. State"
        name="state"
        value={usState}
        onChange={(event) => setUSState(event.target.value)}
      />
      <button class="search-button" onClick={(event) => searchMountain(event)}>Search</button>
    </form>
  );
}

Search.propTypes = {
  searchState: PropTypes.func.isRequired,
};

export default Search;