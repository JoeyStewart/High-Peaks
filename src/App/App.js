import './App.css';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain';
import { useState } from 'react'


function App(){
 const dummyData = [
       { id: 1, state: 'New York', snippet: 'Mt. Marcy' },
       { id: 2, state: 'New Jersey', snippet: 'High Point' },
       { id: 3, state: 'Vermont', snippet: 'Mt. Mansfield' },
   ]
 const [mountains, setMountain] = useState(dummyData)
  
 function searchState(searchState) { //will need to pull from data object 
    setMountain([...mountains, searchState])
 }


 return(
   <main className='App'>
       <h1>High Peaks</h1>
       <Search searchState={searchState}/>
       <Mountain mountains={mountains}/>
   </main>
 )
}


export default App;
