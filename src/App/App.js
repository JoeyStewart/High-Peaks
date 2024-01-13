import './App.css';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain';
import { useState, useEffect } from 'react';
import stateData from '../Data/Data';

function App(){
 const dummyData = [
       { id: 1, state: 'New York', mountain: 'Mt. Marcy', snippet: 'Mt. Marcy, Big old mountain that I hated hiking so much this place sucks. Shoutout to the Stewarts gas station with the PB&Js' },
       { id: 2, state: 'New Jersey', mountain: 'High Point',snippet: 'High Point, pretty lame place ngl' },
       { id: 3, state: 'Vermont', mountain: 'Mt. Mansfield' ,snippet: 'Mt. Mansfield, Did the vertical trailhead. Pretty much straight up but it was cool.' },
   ]
 const [mountain, setMountain] = useState(null)
 console.log(mountain)
//  useEffect(() => {
//   console.log('Mountain state updated:', mountain);
// }, []);
  
 function searchState(newSearchState) {
  console.log(newSearchState)
  const searchString = newSearchState.toString().toLowerCase();
  console.log(searchString)
  const dataObject = stateData.find(mountain => mountain.state.toLowerCase() === searchString);
  console.log(dataObject)
  const matchingPeak = dataObject ? dataObject.mountain : null;
  console.log(matchingPeak)
  const mountainObject = dummyData.find(searchObject => searchObject.mountain === matchingPeak);
  setMountain(mountainObject);
  return mountainObject;
}

// useEffect(() => {
//   console.log('Mountain state updated:', mountain);
// }, [mountain]);

 return(
   <main className='App'>
       <h1>High Peaks</h1>
       <Search searchState={searchState}/>
       <Mountain mountain={mountain}/>
   </main>
 )
}


export default App;


//If the state search is equaled to the on in the created data object
//The corresponding mountain in that object is pulled from the API