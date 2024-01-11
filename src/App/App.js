import './App.css';
import Search from '../Search/Search';
import Mountain from '../Moutain/Mountain';
import { useState } from 'react'


function App(){
 const dummyIdeas = [
       { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
       { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
       { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
   ]
 const [mountains, setMountain] = useState(dummyIdeas)
  function addIdea (newIdea) {
    setMountain([...mountains, newIdea])
 }


 return(
   <main className='App'>
       <h1>High Peaks</h1>
       <Search addIdea={addIdea}/>
       <Mountain mountains={mountains}/>
   </main>
 )
}


export default App;
