import './Card.css';

//Button will be used for favorites.
//Change props to snippit and ID when mock data is finished.
function Card({title, description, id}){
 return (
   <div className='card'>
     <h3>{title}</h3>
     <p>{description}</p>
     <button>😩</button> 
   </div>
 )
}


export default Card;
