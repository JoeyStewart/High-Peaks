import { useState } from 'react';
import './Search.css';


function Search(addIdea){
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");


 function submitNewIdea(event) {
   event.preventDefault()
   const newIdea = {
       id: Date.now(),
       title,
       description
   }
   addIdea(newIdea)
   emptyInput()
}


 function emptyInput(){
   setTitle("")
   setDescription("")
 }
 return (
   <form>
       <input
       type="text"
       placeholder="someShit"
       name="title"
       value={title}
       onClick={event => setTitle(event.target.value)}
       />
       <input
       type="text"
       placeholder="Descript This"
       name="description"
       value={description}
       onClick={event => setDescription(event.target.value)}
       />


       <button onClick = { event => submitNewIdea(event)}>Submissive</button>
   </form>
 )
}


export default Search