import './Card.css';

//Button will be used for favorites.
//Change props to snippit and ID when mock data is finished.
function Card({state, snippet, id}){
 return (
   <div className='card'>
     <h3>{state}</h3>
     <p>{snippet}</p>
     <button>😩</button> 
   </div>
 )
}


export default Card;
