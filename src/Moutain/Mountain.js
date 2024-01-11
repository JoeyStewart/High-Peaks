import Card from '../Card/Card.js';
import './Mountain.css';


function Mountain({mountains}){


const mountainCards = mountains.map(mountain => {
   return (
       <Card
       state={mountain.state}
       snippet={mountain.snippet}
       id={mountain.id}
       key={mountain.id}
       />
   )
})
 return (
   <div className='mountains-container'>
     {mountainCards}
   </div>
 )
}


export default Mountain;