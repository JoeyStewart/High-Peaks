import Card from '../Card/Card.js';
import './Mountain.css';


function Mountain({mountains}){


const mountainCards = mountains.map(mountain => {
   return (
       <Card
       title={mountain.title}
       description={mountain.description}
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