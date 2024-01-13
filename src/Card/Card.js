import './Card.css';

//Button will be used for favorites.
//Change props to snippit and ID when mock data is finished.
function Card({state, snippet, mountain, id, saveArticle}){
    
    const handleSave = () => {
        const article = {
          state,
          mountain,
          snippet,
          id,
        };
        saveArticle(article);
      };

 return (
   <div className='card'>
     <h2>{state}</h2>
     <h3>{mountain}</h3>
     <p>{snippet}</p>
     <button onClick={handleSave}>Save</button>
   </div>
 )
}


export default Card;
