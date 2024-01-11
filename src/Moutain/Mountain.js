import Card from '../Card/Card';
import './Mountain.css';


function Mountain({ mountains}){


const MountainCards = mountains.map(mountain => {
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
     {MountainCards}
   </div>
 )
}


export default Mountain;